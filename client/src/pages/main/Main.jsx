import styles from './Main.module.scss'
import Cards from '../../components/cards/Cards'
import News from './news/News'
import {useEffect, useState} from 'react'


function Main() {

  const [lastNews, setLastNews] = useState(null)

  const numbers = [
    {
      num: 27,
      descr: 'Лет успешной профессиональной работы'
    },
    {
      num: 29,
      descr: 'Реализованных социальных проектов'
    },
    {
      num: 57,
      descr: 'Просветительских брошюр тиражом >60 000'
    },
    {
      num: 15,
      descr: 'Тысяч человек получили благотворительную помощь'
    },
    {
      num: 37,
      descr: 'Тысяч восстановленных в правах вкладчиков'
    },
  ]

  useEffect(() => {
    fetch('/lastnews')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setLastNews(data)
      })
  }, [])


  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Юридические услуги для граждан и предпринимателей</h1>
        <div className={styles.container}>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <div style={{display: 'flex'}}>
              <div className={styles.description}>
                <h2 className={styles.subtitle}>Для тех, кто нуждается в помощи, но не знает, как её найти</h2>
                <p className={styles.description}>Липецкое областное объединение потребителей (ЛООП) «ЗАЩИТА» - первая в
                  России социально ориентированная некоммерческая организация – исполнитель общественно полезной услуги
                  «содействие в предоставлении бесплатной юридической помощи (СО НКО - ИОПУ).</p>
                <p className={styles.highlight}>Для тех, кто верит, что право – защита его прав.</p>
              </div>
              <img src="./home_1.jpg" alt="Правовое просвещение"/>
            </div>
            <div style={{display: 'flex'}}>
              <img src="./home_2.jpg" alt=""/>
              <div>
                <h3>Основные цели и задачи объединения</h3>
                <ul className={styles.list}>
                  <li>Содействие становлению гражданского общества и его институтов в Липецкой области</li>
                  <li>Общественный контроль за деятельностью органов власти</li>
                  <li>Защита прав, в том числе прав потребителей, и законных интересов граждан, предпринимателей и юридических
                    лиц</li>
                  <li>Пропаганда и защита прав и свобод человека</li>
                  <li>Содействие в профилактике антикоррупционного поведения</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <Cards/>
          </div>
        </div>
        <div className={styles.numbers}>
          {
            numbers.map((item, index) =>
              (<div key={index + 'fkldk'} className={styles.count}>
                <span className={styles.number}>{item.num}</span>
                <p>{item.descr}</p>
              </div>)
            )
          }
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <h2>Направления деятельности</h2>
            <ul className={styles.activities}>
              <li>Жилищные споры</li>
              <li>Наследственные дела</li>
              <li>Семейные споры</li>
              <li>ДТП (дорожно-транспортные происшествия)</li>
              <li>Трудовые споры и коллективные трудовые споры</li>
              <li>Административные дела</li>
              <li>Регистрация ИП, ООО</li>
              <li>Иные гражданские дела</li>
            </ul>
          </div>
          <div className={styles.news}>
            <h2>Последние новости</h2>
            {lastNews ? <News lastnews={lastNews}/> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
