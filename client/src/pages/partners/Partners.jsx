import styles from './Partners.module.scss'
import Cards from '../../components/cards/Cards'

function Partners() {
  return (
    <div className={styles.wrap}>
      <div>
        <h1 className={styles.title}>Наши партнеры</h1>
        <ul className={styles.list}>
          <li><a href="http://souz-potrebiteley.ru" target='_blank' rel="noreferrer">Союз потребителей Российской Федерации</a></li>
          <li><a href="https://ombudsman-lipetsk.ru/" target='_blank' rel="noreferrer">Уполномоченный по правам человека в Липецкой области</a></li>
          <li><a href="https://asmo48.ru/" target='_blank' rel="noreferrer">Союз муниципальных образований Липецкой области</a></li>
          <li> <a href="https://nko48.ru/" target='_blank' rel="noreferrer">Клуб лидеров НКО Липецкой области</a></li>
          <li><a href="http://uvp48.ru/" target='_blank' rel="noreferrer">Управление внутренней политики Липецкой области</a></li>
          <li><a href="https://data.economy.gov.ru/analytics/sonko/region/98" target='_blank' rel="noreferrer">Социально ориентированные НКО</a></li>
        </ul>
        <h2 className={styles.title}>Полезные ссылки</h2>
        <ul className={styles.list}>
          <li><a href="http://48.rospotrebnadzor.ru" target='_blank' rel="noreferrer">Роспотребнадзор по Липецкой области</a></li>
          <li><a href="https://липецкаяобласть.рф" target='_blank' rel="noreferrer">Администрация Липецкой области</a></li>
          <li><a href="http://pravo.minjust.ru" target='_blank' rel="noreferrer">Нормативные правовые акты в Российской Федерации</a></li>
          <li><a href="https://admlip.ru/about/munitsipalnye-obrazovaniya/self-administration/sites/" target='_blank' rel="noreferrer">Список сайтов муниципальных образований</a></li>
          <li><a href="https://www.gosuslugi.ru" target='_blank' rel="noreferrer">Портал Госуслуг</a></li>
          <li><a href="https://artamonovigor.ru" target='_blank' rel="noreferrer">Портал "Развиваем Липецкую область вместе"</a></li>
        </ul>
      </div>
      <div className={styles.cards}><Cards/></div>
    </div>

  )
}

export {Partners}