import { useState } from "react";
import {
  EditorState,
  convertToRaw,
  convertFromHTML, 
  ContentState,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";
import draftToHtml from "draftjs-to-html";
const DraftContainer = styled.div`
  .App-header {
    background-color: ${({ theme }) => theme.colors.dark[0]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    font-size: 1.7rem;
    padding: 1rem 0;
    border-radius: 0.8rem 0.8rem 0 0;
  }

  .wrapper-class {
    padding: 1rem;
    border-top: 2px solid transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.gray[2]};
    border-radius: 0 0 0.8rem 0.8rem;
  }

  .editor-class {
    background-color: ${({ theme }) => theme.colors.light[4]};
    line-height: 1.5;
    border-radius: 0.8rem;
    padding: 0 0.6rem;
     border: 0.1rem solid ${({ theme }) => theme.colors.gray[2]};
    font-size: 1.6rem;
    min-height: 24rem;
  }

  .toolbar-class {
     border: 0.1rem solid ${({ theme }) => theme.colors.gray[2]};
    border-radius: 0.8rem;
  }

  .preview {
    padding: 1rem;
    margin-top: 1rem;
    font-size: 1.6rem;
  }
`;
export const Draft = ({ label, onChange = () => {}, defaultValue }) => {
  const [editorState, setEditorState] = useState(() =>
    defaultValue
      ? EditorState.createWithContent(
          ContentState.createFromBlockArray(convertFromHTML(defaultValue))
        )
      : EditorState.createEmpty()
  );
  // const  [convertedContent, setConvertedContent] = useState('');

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    onChange(currentContentAsHTML);
  };

  // const createMarkup = (html) => {
  //   return  {
  //     __html: DOMPurify.sanitize(html)
  //   }
  // }

  return (
    <DraftContainer className="App">
      <header className="App-header">{label}</header>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "list",
            "textAlign",
            "link",
            "embedded",
            "image",
            "history",
          ],
        }}
      />
      {/* <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div> */}
    </DraftContainer>
  );
};

// const options = {
//   options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
//   inline: {
//     inDropdown: false,
//     className: undefined,
//     component: undefined,
//     dropdownClassName: undefined,
//     options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
//     bold: { icon: bold, className: undefined },
//     italic: { icon: italic, className: undefined },
//     underline: { icon: underline, className: undefined },
//     strikethrough: { icon: strikethrough, className: undefined },
//     monospace: { icon: monospace, className: undefined },
//     superscript: { icon: superscript, className: undefined },
//     subscript: { icon: subscript, className: undefined },
//   },
//   blockType: {
//     inDropdown: true,
//     options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
//     className: undefined,
//     component: undefined,
//     dropdownClassName: undefined,
//   },
//   fontSize: {
//     icon: fontSize,
//     options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
//     className: undefined,
//     component: undefined,
//     dropdownClassName: undefined,
//   },
//   fontFamily: {
//     options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
//     className: undefined,
//     component: undefined,
//     dropdownClassName: undefined,
//   },
//   list: {
//     inDropdown: false,
//     className: undefined,
//     component: undefined,
//     dropdownClassName: undefined,
//     options: ['unordered', 'ordered', 'indent', 'outdent'],
//     unordered: { icon: unordered, className: undefined },
//     ordered: { icon: ordered, className: undefined },
//     indent: { icon: indent, className: undefined },
//     outdent: { icon: outdent, className: undefined },
//   },
//   textAlign: {
//     inDropdown: false,
//     className: undefined,
//     component: undefined,
//     dropdownClassName: undefined,
//     options: ['left', 'center', 'right', 'justify'],
//     left: { icon: left, className: undefined },
//     center: { icon: center, className: undefined },
//     right: { icon: right, className: undefined },
//     justify: { icon: justify, className: undefined },
//   },
//   colorPicker: {
//     icon: color,
//     className: undefined,
//     component: undefined,
//     popupClassName: undefined,
//     colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
//       'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
//       'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
//       'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
//       'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
//       'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)'],
//   },
//   link: {
//     inDropdown: false,
//     className: undefined,
//     component: undefined,
//     popupClassName: undefined,
//     dropdownClassName: undefined,
//     showOpenOptionOnHover: true,
//     defaultTargetOption: '_self',
//     options: ['link', 'unlink'],
//     link: { icon: link, className: undefined },
//     unlink: { icon: unlink, className: undefined },
//     linkCallback: undefined
//   },
//   emoji: {
//     icon: emoji,
//     className: undefined,
//     component: undefined,
//     popupClassName: undefined,
//     emojis: [
//       '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
//       '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
//       '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
//       '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
//       '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
//       '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
//       '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
//       '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
//       '✅', '❎', '💯',
//     ],
//   },
//   embedded: {
//     icon: embedded,
//     className: undefined,
//     component: undefined,
//     popupClassName: undefined,
//     embedCallback: undefined,
//     defaultSize: {
//       height: 'auto',
//       width: 'auto',
//     },
//   },
//   image: {
//     icon: image,
//     className: undefined,
//     component: undefined,
//     popupClassName: undefined,
//     urlEnabled: true,
//     uploadEnabled: true,
//     alignmentEnabled: true,
//     uploadCallback: undefined,
//     previewImage: false,
//     inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
//     alt: { present: false, mandatory: false },
//     defaultSize: {
//       height: 'auto',
//       width: 'auto',
//     },
//   },
//   remove: { icon: eraser, className: undefined, component: undefined },
//   history: {
//     inDropdown: false,
//     className: undefined,
//     component: undefined,
//     dropdownClassName: undefined,
//     options: ['undo', 'redo'],
//     undo: { icon: undo, className: undefined },
//     redo: { icon: redo, className: undefined },
//   },
// }
