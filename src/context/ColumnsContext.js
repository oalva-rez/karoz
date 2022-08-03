import React, { useState, useContext } from "react";

const ColumnsContext = React.createContext();

export const useColumnsContext = () => useContext(ColumnsContext);

export default function ColumnsProvider({ children }) {
  const [columns, setColumns] = useState([
    { title: "ToDo", id: 1, boardId: 1 },
    { title: "InProgress", id: 2, boardId: 1 },
    { title: "Done", id: 3, boardId: 1 },
    { title: "ToDo", id: 1, boardId: 2 },
    { title: "InProgress", id: 2, boardId: 2 },
    { title: "Done", id: 3, boardId: 2 },
    { title: "ToDo", id: 1, boardId: 3 },
    { title: "InProgress", id: 2, boardId: 3 },
    { title: "Done", id: 3, boardId: 3 },
  ]);

  return (
    <ColumnsContext.Provider value={[columns, setColumns]}>
      {children}
    </ColumnsContext.Provider>
  );
}
