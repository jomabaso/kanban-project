import { useState, useEffect } from "react";
import { loadBoard, saveBoard } from "../utils/storage";

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

export function useBoard() {
  const [board, setBoard] = useState(() => {
    return loadBoard() || initialBoard;
  });

  useEffect(() => {
    saveBoard(board);
  }, [board]);

  const moveCard = (cardId, fromColumnId, direction) => {
    const fromIndex = columnOrder.indexOf(fromColumnId);
    const toColumnId =
      direction === "right"
        ? columnOrder[fromIndex + 1]
        : columnOrder[fromIndex - 1];

    if (!toColumnId) return;

    setBoard((prev) => {
      const cardToMove = prev.columns[fromColumnId].cards.find(
        (card) => card.id === cardId
      );

      return {
        ...prev,
        columns: {
          ...prev.columns,
          [fromColumnId]: {
            ...prev.columns[fromColumnId],
            cards: prev.columns[fromColumnId].cards.filter(
              (card) => card.id !== cardId
            ),
          },
          [toColumnId]: {
            ...prev.columns[toColumnId],
            cards: [...prev.columns[toColumnId].cards, cardToMove],
          },
        },
      };
    });
  };

  const addCardToTodo = (text) => {
    setBoard((prev) => ({
      ...prev,
      columns: {
        ...prev.columns,
        todo: {
          ...prev.columns.todo,
          cards: [...prev.columns.todo.cards, { id: Date.now(), text }],
        },
      },
    }));
  };

  return {
    board,
    moveCard,
    addCardToTodo,
  };
}
