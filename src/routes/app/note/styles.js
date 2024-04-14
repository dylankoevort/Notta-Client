import styled from "styled-components";

const StyledNote = styled.div``;

const StyledNoteHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .note-title {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    padding: 0;
  }

  .note-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const StyledEditorContainer = styled.div`
  .note-editor {
    background-color: transparent !important;
    padding: 0;
    font-size: 1rem;

    &:hover {
      background-color: transparent !important;
    }

    &:focus {
      background-color: transparent !important;
      box-shadow: none !important;
    }
  }
`;

export { StyledNote, StyledNoteHeader, StyledEditorContainer };
