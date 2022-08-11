import React, { useState, useContext } from "react";

const ColumnsContext = React.createContext();

export const useColumnsContext = () => useContext(ColumnsContext);

export default function ColumnsProvider({ children }) {
  const [columns, setColumns] = useState([
    { title: "ToDo", id: 1, boardId: 1, color: "#97d78a" },
    { title: "InProgress", id: 2, boardId: 1, color: "#5b553d" },
    { title: "Done", id: 3, boardId: 1, color: "#c3644c" },
    { title: "ToDo", id: 1, boardId: 2, color: "#67d275" },
    { title: "InProgress", id: 2, boardId: 2, color: "#51d0d5" },
    { title: "Done", id: 3, boardId: 2, color: "#b298a4" },
    { title: "ToDo", id: 1, boardId: 3, color: "#e60ca0" },
    { title: "InProgress", id: 2, boardId: 3, color: "#455bdf" },
    { title: "Done", id: 3, boardId: 3, color: "#88c94b" },
  ]);

  return (
    <ColumnsContext.Provider value={[columns, setColumns]}>
      {children}
    </ColumnsContext.Provider>
  );
}
