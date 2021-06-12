import styles from './Footer.module.scss'

function Footer() {

  const currentTime = new Date()

  return(
    <div className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <div>
            <p style={{fontWeight: '500'}}>Липецкле областное объединение потребителей</p>
            <p style={{color: '#4673b5', fontWeight: '500', fontSize: '1.3rem'}}>«ЗАЩИТА»</p>
            <p>{currentTime.getFullYear()} г.</p>
          </div>
        </div>
        <div className={styles.info}>
          <p className={styles.contacts}>Контакты</p>
          <p>г. Липецк, ул. М. Горького, д. 22, оф. 18а</p>
          <p>+7 (4742) 47-62-45</p>
          <p>hrloph@mail.ru</p>
        </div>

      </div>
    </div>
  )
}

export {Footer}
