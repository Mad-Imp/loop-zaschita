import styles from './Cards.module.scss'
import Card from '../card/Card';


function Cards() {
  return (
    <div className={styles.cards}>
      <div className={styles.wrap}>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Cards