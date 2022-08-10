import React from "react";
import iconBoard from "../../assets/icon-board.svg";
import iconBoardPurple from "../../assets/icon-board-purple.svg";
import { useBoardsContext } from "../../context/BoardsContext";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useShowModalContext } from "../../context/ShowModalContext";

function BoardSelect() {
  const [boards, setBoards] = useBoardsContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [showModal, setShowModal] = useShowModalContext();

  function selectBoard(title, id) {
    setActiveBoard({ title, id });
  }

  return (
    <div className="sidebar--all-boards">
      <h3>ALL BOARDS {`(${boards.length})`}</h3>
      <ul>
        {boards.map((board) => (
          <li
            className={
              activeBoard.id === board.id
                ? "sidebar--board selected"
                : "sidebar--board"
            }
            key={board.id}
            onClick={(title, id) => selectBoard(board.title, board.id)}
          >
            <img src={iconBoard} alt="board" />
            {board.title}
          </li>
        ))}
      </ul>
      <button
        className="sidebar--board-button"
        onClick={() => {
          setShowModal("addBoard");
        }}
      >
        <img src={iconBoardPurple} alt="board" />+ Create New Board
      </button>
    </div>
  );
}

export default BoardSelect;
