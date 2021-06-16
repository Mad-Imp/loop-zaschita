import {v4 as uuidv4} from "uuid";
import styles from './News.module.scss'
import {Link} from "react-router-dom"

export default function News() {

  const newsItem = [
    {
      title: 'Выездные Бесплатные Юридические Консультации В Сельские Поселения Данковского Района',
      date: '12.06.2021'
    },
    {
      title: 'Заголовок второй новости заголовок второй новости заголовок второй новости заголовок второй новости заголовок второй новости заголовок второй новости заголовок второй новости заголовок второй новости',
      date: '12.06.2021'
    },
    {
      title: 'Выездные Бесплатные ',
      date: '12.06.2021'
    },
  ]

  return <div className={styles.wrap}>
    {newsItem.map(item => (
      <Link to='/news' key={uuidv4()}>
        <div className={styles.item}>
         <h3 className={styles.title}>{item.title.length > 90
           ? `${item.title.substr(0, 90)}...`
           : item.title}</h3>
          <p className={styles.date}>{item.date}</p>
        </div>
      </Link>
    ))}
  </div>
}