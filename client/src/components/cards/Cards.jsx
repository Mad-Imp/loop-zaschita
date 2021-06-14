import styles from './Cards.module.scss'
import Card from '../card/Card';
import {useState} from 'react';
import {Link} from 'react-router-dom';


function Cards() {

  const [cardsInfo, setCardsInfo] = useState([
    {
      id: 1,
      title: 'Социальный проект: "Доступная юридическая помощь, как фактор повышения качества жизни людей"',
      color: "#f6f6f6",
      image: "../assets/img/card-mm.png",
      link: ''
    },
    {
      id: 2,
      title: "Наши партнеры",
      color: "#ffe9da",
      image: "../assets/img/card-mm.png",
      link: ''
    },
    {
      id: 3,
      title: "О нас в СМИ",
      color: "#c6deef",
      image: "./card-mm.jpg",
      link: '/videos'
    }
  ])

  return (
    <div className={styles.cards}>
      <div className={styles.wrap}>
        {
          cardsInfo.map((item) => (
            <Link to={item.link}>
              <Card key={item.id} title={item.title} color={item.color} image={item.image}/>
            </Link>

          ))
        }
      </div>
    </div>
  )
}

export default Cards