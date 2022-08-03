import React, { useState, useContext } from "react";

const ShowModalContext = React.createContext();

export const useShowModalContext = () => useContext(ShowModalContext);

export default function ShowModalProvider({ children }) {
  const [showModal, setShowModal] = useState([]);

  return (
    <ShowModalContext.Provider value={[showModal, setShowModal]}>
      {children}
    </ShowModalContext.Provider>
  );
}
