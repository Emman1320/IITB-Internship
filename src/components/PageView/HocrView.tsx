import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { exampleSetup } from "prosemirror-example-setup";
import Page from "../../types";
import "./HocrView.css";
import { Dispatch, useEffect } from "react";
// import { setHoverId } from "../../reducer/actions";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { renderToString } from "react-dom/server";

export interface Props {
  page: Page | null;
  width: int;
  height: int;
  hoverId: string;
  dispatch: Dispatch<AppReducerAction>;
  editorValue: string;
}

function HocrView({
  page,
  hoverId,
  dispatch,
  editorValue,
  setEditorValue,
}: Props) {
  useEffect(() => {
    if (page) {
      const mySchema = new Schema({
        nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
        marks: schema.spec.marks,
      });
      window.view = new EditorView(document.querySelector("#editor"), {
        state: EditorState.create({
          doc: DOMParser.fromSchema(mySchema).parse(page),
          plugins: exampleSetup({ schema: mySchema }),
        }),
      });
    }
  }, [page]);

  return (
    <div>
      <div
        id="editor"
        onKeyUp={(event) => {
          setEditorValue(event.target.innerText);
        }}
      ></div>
      <div id="content">&nbsp;</div>
      {/* <ReactQuill value={editorValue} onChange={valueAdded} /> */}
      {/* <p>{linesEl}</p> */}
    </div>
  );
}

export default HocrView;
