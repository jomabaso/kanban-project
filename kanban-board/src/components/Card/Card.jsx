import styles from './Card.module.css'

function Card({ text, onMoveLeft, onMoveRight, canMoveLeft, canMoveRight  }) {
  return (
    <div className={styles.card}>

      <p>{text}</p>

      <div className={styles.actions}>
        {canMoveLeft && (
          <button onClick={onMoveLeft}> ← </button>
        )}
        {canMoveRight && (
          <button onClick={onMoveRight}> → </button>
        )}

      </div>
    </div>
  )
}

export default Card