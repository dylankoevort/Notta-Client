import styled from "styled-components";

const StyledNotes = styled.div`
  height: calc(100% - 40px); 
  padding: 20px;

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
  height: 200px;
  border-radius: 8px;
  background-color: #f5f5ef;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 0.2s ease-in-out;

  p {
    margin: 0;
  }

  .note-title,
  .note-content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .note-title {
    -webkit-line-clamp: 2;
    min-height: 42px;
    margin: 0 0 10px;
  }

  .note-content {
    font-size: 0.9rem;
    -webkit-line-clamp: 7;
  }

  &:hover {
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
    transform: scale(1.01);
  }

  a:hover {
    color: #747474;
  }

  @media (min-width: 1024px) {
    height: 250px;
    width: calc(100% - 20px);

    .note-content {
      -webkit-line-clamp: 8;
    }
  }
`;

export { StyledNotes, StyledNoteContainer, StyledNoteItem };
