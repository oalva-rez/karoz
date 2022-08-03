import React from "react";
import iconBoard from "../../assets/icon-board.svg";
import { useBoardsContext } from "../../context/BoardsContext";
import { useActiveBoardContext } from "../../context/BoardsContext";

function BoardSelect() {
  const [boards, setBoards] = useBoardsContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();

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
      <button className="sidebar--board-button">
        <img src={iconBoard} alt="board" />+ Create New Board
      </button>
    </div>
  );
}

export default BoardSelect;
