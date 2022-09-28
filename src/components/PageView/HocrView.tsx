import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { exampleSetup } from "prosemirror-example-setup";
import Page from "../../types";
import "./HocrView.css";
import { Dispatch, useEffect, useState } from "react";
import { setHoverId } from "../../reducer/actions";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { renderToString } from "react-dom/server";

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
  // if (page == null) {
  //   return <div></div>;
  // }
  // const RenderWord = (wordarray, hoverId) => {
  //   if (!wordarray) {
  //     return;
  //   }
  //   const handleHover = (thoverId) => {
  //     dispatch(setHoverId(thoverId));
  //   };

  //   const WordsEl = wordarray.map((wordChild) => (
  //     <span
  //       className={`ocr_word ${hoverId === wordChild.id ? "hoved" : ""}`}
  //       key={wordChild.id}
  //       onMouseEnter={() => {
  //         handleHover(wordChild.id);
  //         //setHoverId(e.target.attrs.id)
  //       }}
  //       onMouseLeave={() => {
  //         handleHover("");
  //         //setHoverId('');
  //         //e.target.strokeEnabled(false);

  //         //setPrevHoverId(e.target.attrs.id);
  //       }}
  //     >
  //       {wordChild.text}{" "}
  //     </span>
  //   ));
  //   return WordsEl;
  // };

  // const linesEl = page?.children?.map((lineChild) => (
  //   <>
  //     <span className="ocr_line" key={lineChild.id}>
  //       {RenderWord(lineChild.children, hoverId)}
  //     </span>
  //     <br />
  //   </>
  // ));
  // let ocrRichText = "";
  // if (page != null) ocrRichText = renderToString(page);

  // useEffect(() => {
  //   if (!editorValue) setEditorValue(page);
  // }, [page]);

  // const valueAdded = (value) => {
  // setEditorValue(value);
  };
  // const rteChange = (content, delta, source, editor) => {
  //   console.log(editor.getHTML()); // rich text
  //   console.log(editor.getText()); // plain text
  //   console.log(editor.getLength()); // number of characters
  // };

  // Mix the nodes from prosemirror-schema-list into the basic schema to
  // create a schema with list support.

  useEffect(() => {
    if (page) {
      const mySchema = new Schema({
        nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
        marks: schema.spec.marks,
      });
      console.log(DOMParser.fromSchema(mySchema).parse(page));

      window.view = new EditorView(document.querySelector("#editor"), {
        state: EditorState.create({
          doc: DOMParser.fromSchema(mySchema).parse(
            // document.querySelector("#content")
            page
          ),
          plugins: exampleSetup({ schema: mySchema }),
        }),
      });
    }
  }, [page]);
  return (
    <div>
      <div id="editor"></div>
      <div id="content">&nbsp;</div>
      {/* <ReactQuill value={editorValue} onChange={valueAdded} /> */}
      {/* <p>{linesEl}</p> */}
    </div>
  );
}

export default HocrView;
