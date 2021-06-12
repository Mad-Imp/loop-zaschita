import styles from './Footer.module.scss'

function Footer() {
  return(
    <div className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <div>
            <p>Липецкле областное объединение потребителей</p>
            <p>«ЗАЩИТА»</p>
            <p>1994 - 2021  </p>
          </div>
        </div>
        <div className={styles.info}>
          <p className={styles.contacts}>Контакты</p>
          <p>г. Липецк, ул. М. Горького, д. 22, оф. 18а</p>
          <p>+7(4742) 47-62-45</p>
          <p>hrloph@mail.ru</p>
        </div>

      </div>
    </div>
  )
}

export {Footer}
