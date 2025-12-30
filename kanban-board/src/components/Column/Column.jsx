import Card from "../Card/Card";
import AddCard from "../AddCard/Addcard";
import styles from "./Column.module.css";

function Column({ id, title, cards , onAddCard, onMoveCard}) {
  return (
    <div className={styles.column}>
      <h2 className={styles.title}>{title}</h2>

      {id === "todo" && <AddCard onAdd={onAddCard} />}

      <div className={styles.cards}>
        {cards.map(card => (
          <Card 
          key={card.id} 
          text={card.text}
          canMoveLeft={id !== "todo"}
          canMoveRight={id !== "done"}
          onMoveLeft={() => onMoveCard(card.id, id, 'left')}
          onMoveRight={() => onMoveCard(card.id, id, 'right')}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
