import React from "react";
import Column from "./Column";
function ActiveBoard() {
  return (
    <main className="active-board">
      <Column />
      <div className="new-column">
        <div>+ New Column</div>
      </div>
    </main>
  );
}

export default ActiveBoard;
