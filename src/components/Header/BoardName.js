import React, { useState } from "react";
import { useActiveBoardContext } from "../../context/BoardsContext";
import chevronDown from "../../assets/icon-chevron-down.svg";
import chevronUp from "../../assets/icon-chevron-up.svg";
import { useMobileScreenContext } from "../../context/MobileScreenContext";
import { useShowAllBoardsContext } from "../../context/MobileScreenContext";

function BoardName() {
  const [showAllBoards, setShowAllBoards] = useShowAllBoardsContext();
  const [mobileScreen, setMobileScreen] = useMobileScreenContext();

  const [activeBoard, setActiveBoard] = useActiveBoardContext();

  const CorrectChevron = () => {
    if (mobileScreen && showAllBoards) {
      return <img className="chevron" src={chevronUp} alt="chevron up" />;
    } else if (mobileScreen && !showAllBoards) {
      return <img className="chevron" src={chevronDown} alt="chevron down" />;
    }
  };

  return (
    <div
      className="header--active-board"
      onClick={() => {
        setShowAllBoards((prev) => !prev);
      }}
    >
      <div>
        {activeBoard.title}
        <CorrectChevron />
      </div>
    </div>
  );
}

export default BoardName;
