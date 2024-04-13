import styled from "styled-components";

const StyledNote = styled.div`
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .note-title {
    }

    .note-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
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

export { StyledNote, StyledEditorContainer };
