import React, { useState, useContext } from "react";

const ColumnsContext = React.createContext();

export const useColumnsContext = () => useContext(ColumnsContext);

export default function ColumnsProvider({ children }) {
  const [columns, setColumns] = useState([]);

  return (
    <ColumnsContext.Provider value={[columns, setColumns]}>
      {children}
    </ColumnsContext.Provider>
  );
}
