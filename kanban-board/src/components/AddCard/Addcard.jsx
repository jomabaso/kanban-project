import { useState } from "react";
import styles from "./Addcard.module.css";

function AddCard({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return 
    onAdd(text)
    setText('')
  };

  return (
    <form className="{styles.form}" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva Tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button> Añadir </button>
    </form>
  );
}

export default AddCard;
