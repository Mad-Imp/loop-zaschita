import styles from './Cards.module.scss'
import Card from '../card/Card';
import {useState} from 'react';


function Cards() {

  const [cardsInfo, setCardsInfo] = useState([
    {
      id: 1,
      title: 'Социальный проект: "Доступная юридическая помощь, как фактор повышения качества жизни людей"',
      color: "#f6f6f6",
      image: "../assets/img/card-mm.png"
    },
    {
      id: 2,
      title: "О нас в СМИ",
      color: "#ffe9da",
      image: "../assets/img/card-mm.png"
    },
    {
      id: 3,
      title: "О нас в СМИ",
      color: "#c6deef",
      image: "./card-mm.jpg"
    }
  ])

  return (
    <div className={styles.cards}>
      <div className={styles.wrap}>
        {
          cardsInfo.map((item) => (
            <Card key={item.id} title={item.title} color={item.color} image={item.image}/>
          ))
        }
      </div>
    </div>
  )
}

export default Cards