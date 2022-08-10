import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useBoardsContext } from "../../context/BoardsContext";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useColumnsContext } from "../../context/ColumnsContext";
import deleteIcon from "../../assets/icon-cross.svg";
import { nanoid } from "nanoid";

function AddBoardModal(props) {
  const [boards, setBoards] = useBoardsContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [columns, setColumns] = useColumnsContext();
  const [columnsErr, setColumnsErr] = useState(false);
  const [errors, setErrors] = useState({
    titleValue: false,
  });
  // ids for column inputs
  const id1 = nanoid();
  const id2 = nanoid();
  const id3 = nanoid();
  const [inputData, setInputData] = useState({
    title: "",
    columns: { [id1]: "Todo", [id2]: "In Progress", [id3]: "Done" },
  });
  const [columnInputs, setColumnInputs] = useState([
    <div className="column-input" key={id1}>
      <input
        type="text"
        name={id1}
        placeholder="eg. Todo"
        // how does inputData[id1] work?
        value={inputData[id1]}
        onChange={handleChange}
        id="column"
      />
      <img
        src={deleteIcon}
        alt="delete"
        className="column-delete"
        onClick={(e) => {
          deleteColumnInput(e, id1);
        }}
      />
    </div>,
    <div className="column-input" key={id2}>
      <input
        type="text"
        name={id2}
        placeholder="eg. In Progress"
        value={inputData[id2]}
        onChange={handleChange}
        id="column"
      />
      <img
        src={deleteIcon}
        alt="delete"
        className="column-delete"
        onClick={(e) => {
          deleteColumnInput(e, id2);
        }}
      />
    </div>,
    <div className="column-input" key={id3}>
      <input
        type="text"
        name={id3}
        placeholder="eg. Done"
        value={inputData[id3]}
        onChange={handleChange}
        id="column"
      />
      <img
        src={deleteIcon}
        alt="delete"
        className="column-delete"
        onClick={(e) => {
          deleteColumnInput(e, id3);
        }}
      />
    </div>,
  ]);
  function isFormValid() {
    let isValid = true;
    if (inputData.title === "") {
      setErrors((err) => ({ ...err, titleValue: true }));
      isValid = false;
    } else {
      setErrors((err) => ({ ...err, titleValue: false }));
    }
    if (columnInputs.length >= 2) {
      setColumnsErr(false);
    } else {
      setColumnsErr(true);
      isValid = false;
      setTimeout(() => {
        setColumnsErr(false);
      }, 3000);
    }

    return isValid;
  }
  function handleChange(e) {
    setInputData((prev) => {
      if (e.target.id === "column") {
        return {
          ...prev,
          columns: {
            ...prev.columns,
            [e.target.name]: e.target.value,
          },
        };
      }
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function deleteColumnInput(event, id) {
    setColumnInputs((prev) => {
      return prev.filter((input) => input.key !== id);
    });
    setInputData((prev) => {
      // delete key and value from columns input object
      const copy = { ...prev };
      delete copy.columns[id];
      return copy;
    });
  }

  function addColumnInput(e) {
    e.preventDefault();
    setColumnInputs((prev) => {
      const id = nanoid();
      return [
        ...prev,
        <div className="column-input" key={id}>
          <input
            type="text"
            name={id}
            placeholder="New Column"
            id="column"
            value={inputData[id]}
            onChange={handleChange}
          />
          <img
            src={deleteIcon}
            alt="delete"
            className="column-delete"
            onClick={(e) => {
              deleteColumnInput(e, id);
            }}
          />
        </div>,
      ];
    });
  }

  function addBoard() {
    const newBoard = {
      id: nanoid(),
      title: inputData.title,
      isSelected: true,
    };
    const newColumns = Object.entries(inputData.columns).map(([key, value]) => {
      return {
        id: key,
        title: value,
        boardId: newBoard.id,
      };
    });
    setColumns((prev) => [...prev, ...newColumns]);
    setBoards((prev) => {
      return [newBoard, ...prev];
    });
    setActiveBoard({
      title: inputData.title,
      id: newBoard.id,
    });
  }
  return (
    <Modal
      {...props}
      size="med"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4 className="modal-title">Add New Board</h4>

        <form className="add-board-form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="e.g Web Design"
            onChange={handleChange}
            value={inputData.title}
            className={errors.titleValue ? "input-err" : ""}
            autoFocus
          />

          <label htmlFor="columns">
            Columns
            <div
              className={columnsErr ? "columns-err show-err" : "columns-err"}
            >
              Must have minimum of 2 columns.
            </div>
          </label>
          {columnInputs}
          <button
            onClick={(e) => {
              addColumnInput(e);
            }}
            className="add-column-btn"
          >
            + Add New Column
          </button>
          <button
            className="create-column-btn"
            onClick={(e) => {
              e.preventDefault();
              if (isFormValid()) {
                setErrors((prev) => ({
                  ...prev,
                  titleValue: false,
                }));
                addBoard();
                props.onHide();
              }
            }}
          >
            Create Board
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AddBoardModal;
