import Card from "../Card/Card";
import styles from "./Column.module.css";

function Column({ title, cards }) {
  return (
    <div className={styles.column}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} text={card.text} />
        ))}
      </div>
    </div>
  );
}

export default Column;
