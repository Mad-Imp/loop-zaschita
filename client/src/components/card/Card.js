import styles from './Card.module.scss'
import {useState} from 'react';

function Card() {
  const [card, setCard] = useState();

  return (
    <div className={styles.card}>
      <p>Hello</p>
    </div>
  )
}

export default Card