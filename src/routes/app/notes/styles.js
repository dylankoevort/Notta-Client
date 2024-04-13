import styled from "styled-components";

const StyledNotes = styled.div`
  // height: 100%;
  // width: 100%;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .actions {
      .new-note {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
  }
`;

const StyledNoteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 30px;
`;

const StyledNoteItem = styled.div`
  width: calc(100% - 20px);
  min-height: 250px;
  max-height: 250px;
  height: 250px;

  border-radius: 8px;
  background-color: #f5f5ef;
  padding: 10px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  p {
    margin: 0;
  }

  .note-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    min-height: 42px;
  }

  .note-content {
    font-size: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }

  &:hover {
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
  }
`;

export { StyledNotes, StyledNoteContainer, StyledNoteItem };
