import React from "react";
import Modal from "react-bootstrap/Modal";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useBoardsContext } from "../../context/BoardsContext";
import { useTasksContext } from "../../context/TasksContext";
import { useThemeContext } from "../../context/ThemeContext";

function DeleteBoardModal(props) {
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [boards, setBoards] = useBoardsContext();
  const [tasks, setTasks] = useTasksContext();
  const [darkTheme, setDarkTheme] = useThemeContext();

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

      setTasks((prev) =>
        prev.filter((task) => task.boardId !== activeBoard.id)
      );
      setActiveBoard(
        newBoards.length === 0
          ? { id: "", title: "Create Board" }
          : { id: newBoards[0].id, title: newBoards[0].title }
      );
      return newBoards;
    });
  }
  return (
    <Modal
      {...props}
      size="med"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      data-theme={darkTheme ? "dark" : "light"}
    >
      <Modal.Body className="delete-modal">
        <h4>Delete this board?</h4>
        <p>
          Are you sure you want to delete the{" "}
          <span
            style={{ fontStyle: "italic", fontWeight: 700 }}
          >{`'${activeBoard.title}'`}</span>{" "}
          board? This action will remove all columns and tasks and cannot be
          reversed.
        </p>
        <div className="delete-modal--buttons">
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
  );
}

export default DeleteBoardModal;
