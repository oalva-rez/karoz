import React from "react";
import Modal from "react-bootstrap/Modal";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useBoardsContext } from "../../context/BoardsContext";

function DeleteBoardModal(props) {
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [boards, setBoards] = useBoardsContext();

  // issue with this function is that it is not updating the state of the boards

  function deleteCurrentBoard() {
    setBoards((prev) => {
      let newBoards = [];
      let filteredBoards = boards.filter(
        (board) => board.id !== activeBoard.id
      );

      filteredBoards.forEach((board, index) => {
        if (index === 0) {
          newBoards.push({
            id: board.id,
            title: board.title,
            isSelected: true,
          });
        } else {
          newBoards.push({
            ...board,
          });
        }
      });
      setActiveBoard({ id: newBoards[0].id, title: newBoards[0].title });
      return newBoards;
    });
  }

  return (
    <div>
      <Modal
        {...props}
        size="med"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="delete-board">
          <h4>Delete this board?</h4>
          <p>
            Are you sure you want to delete the {`'${activeBoard.title}'`}{" "}
            board? This action will remove all columns and tasks and cannot be
            reversed.
          </p>
          <div className="delete-board--buttons">
            <button
              className="delete-action-button"
              onClick={() => {
                deleteCurrentBoard();
                props.onHide();
              }}
            >
              Delete
            </button>
            <button
              className="cancel-action-button"
              onClick={() => props.onHide()}
            >
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DeleteBoardModal;
