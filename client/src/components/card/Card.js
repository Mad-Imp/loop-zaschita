import styles from './Card.module.scss'

function Card(props) {


  return (
    <div style={{background: props.color}} className={styles.card}>
      <div><p>{props.title}</p></div>
      <div className={styles.imgs}><img style={{width: '100px', height: '100px'}} src={props.image} alt="img"/></div>
    </div>
  )
}

export default Card