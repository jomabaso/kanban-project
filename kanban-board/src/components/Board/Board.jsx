import { useState } from "react";
import Column from "../Column/Column";
import styles from "./Board.module.css";

const initialBoard = {
  columns: {
    todo: {
      id: "todo",
      title: "To Do",
      cards: [{ id: 1, text: "Primera tarea" }],
    },
    doing: {
      id: "doing",
      title: "Doing",
      cards: [],
    },
    done: {
      id: "done",
      title: "Done",
      cards: [],
    },
  },
};

function Board() {
  const [board, setBoard] = useState(initialBoard);
  return (
    <div className={styles.board}>
      {Object.values(board.columns).map((column) => (
        <Column key={column.id} title={column.title} cards={column.cards} />
      ))}
    </div>
  );
}

export default Board;
