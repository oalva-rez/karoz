import React from "react";
import { useBoardsContext } from "../../context/BoardsContext";
import { useActiveBoardContext } from "../../context/BoardsContext";
import iconBoard from "../../assets/icon-board.svg";
import iconDark from "../../assets/icon-dark-theme.svg";
import iconLight from "../../assets/icon-light-theme.svg";
import hideSidebar from "../../assets/icon-hide-sidebar.svg";
function Sidebar() {
  const [boards, setBoards] = useBoardsContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();

  function selectBoard(title, id) {
    setActiveBoard({ title, id });
  }
  return (
    <aside className="sidebar">
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
      <div className="sidebar--display-settings">
        <div className="sidebar--theme">
          <img src={iconLight} alt="light" />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <img src={iconDark} alt="dark" />
        </div>
        <div className="sidebar--hide-sidebar">
          <img src={hideSidebar} alt="hide" />
          <div>Hide Sidebar</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
