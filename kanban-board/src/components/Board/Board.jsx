import { useEffect ,useState } from "react";
import { useBoard } from "../../hooks/useBoard";
import { loadBoard, saveBoard }  from "../../utils/storage";
import Column from "../Column/Column";
import styles from "./Board.module.css";

const columnOrder = ["todo", "doing", "done"];


const initialBoard = {
  columns: {
    todo: {
      id: "todo",
      title: "To Do",
      cards: [],
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
  const {board, addCardToTodo, moveCard} = useBoard()

  return (
    <div className={styles.board}>
      {Object.values(board.columns).map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          cards={column.cards}
          onAddCard={addCardToTodo}
          onMoveCard={moveCard}
        />
      ))}
    </div>
  );
}

export default Board;
