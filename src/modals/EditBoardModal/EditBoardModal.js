import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useBoardsContext } from "../../context/BoardsContext";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useColumnsContext } from "../../context/ColumnsContext";
import { useTasksContext } from "../../context/TasksContext";
import { useThemeContext } from "../../context/ThemeContext";
import deleteIcon from "../../assets/icon-cross.svg";
import { nanoid } from "nanoid";

function EditBoardModal(props) {
  const [boards, setBoards] = useBoardsContext();
  const [tasks, setTasks] = useTasksContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [columns, setColumns] = useColumnsContext();
  const [darkTheme, setDarkTheme] = useThemeContext();
  const [columnsErr, setColumnsErr] = useState(false);
  const [errors, setErrors] = useState({
    titleValue: false,
  });

  function getFormattedColumns() {
    const currentColumns = columns.filter(
      (column) => column.boardId === activeBoard.id
    );
    const formattedColumns = {};
    currentColumns.forEach((column) => {
      formattedColumns[column.id] = column.title;
    });
    return formattedColumns;
  }
  const [inputData, setInputData] = useState({
    title: activeBoard.title,
    columns: getFormattedColumns(),
  });

  function isFormValid() {
    let isValid = true;
    if (inputData.title === "") {
      setErrors((err) => ({ ...err, titleValue: true }));
      isValid = false;
    } else {
      setErrors((err) => ({ ...err, titleValue: false }));
    }
    if (Object.keys(inputData.columns).length >= 2) {
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
    setInputData((prev) => {
      // delete key and value from columns input object
      const copy = { ...prev };
      delete copy.columns[id];
      return copy;
    });
  }

  function addColumnInput(e) {
    e.preventDefault();
    setInputData((prev) => {
      return {
        ...prev,
        columns: {
          ...prev.columns,
          [nanoid()]: "",
        },
      };
    });
  }
  function randomColorGenerator() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  function updateBoard() {
    const newBoard = {
      id: activeBoard.id,
      title: inputData.title,
      isSelected: true,
    };
    const newColumns = Object.entries(inputData.columns).map(([key, value]) => {
      const TEMPKEY = key.length > 2 ? key : parseInt(key);
      const columnColor = columns.find((column) => column.id === TEMPKEY) || {
        color: randomColorGenerator(),
      };
      return {
        title: value,
        id: TEMPKEY, //TEMPORARY FIX - DEPLOYMENT SHOULD JUST BE 'key'
        boardId: newBoard.id,
        color: columnColor.color,
      };
    });

    setColumns((prev) => [
      ...prev.filter((column) => column.boardId !== activeBoard.id),
      ...newColumns,
    ]);
    const columnIds = columns.map((column) => column.id);
    setTasks((prev) =>
      prev.filter((task) => columnIds.includes(task.columnId))
    );
    setBoards((prev) => {
      return [newBoard, ...prev.filter((board) => board.id !== activeBoard.id)];
    });
    setActiveBoard({
      id: newBoard.id,
      title: newBoard.title,
    });
  }
  return (
    <Modal
      {...props}
      size="med"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      data-theme={darkTheme ? "dark" : "light"}
    >
      <Modal.Body>
        <h4 className="modal-title">Edit Board</h4>

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
          {Object.entries(inputData.columns).map(([key, value]) => {
            return (
              <div className="column-input" key={key}>
                <input
                  type="text"
                  name={key}
                  placeholder="New Column"
                  id="column"
                  value={value}
                  onChange={handleChange}
                />
                <img
                  src={deleteIcon}
                  alt="delete"
                  className="column-delete"
                  onClick={(e) => {
                    deleteColumnInput(e, key);
                  }}
                />
              </div>
            );
          })}

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
                updateBoard();
                props.onHide();
              }
            }}
          >
            Save Changes
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EditBoardModal;
