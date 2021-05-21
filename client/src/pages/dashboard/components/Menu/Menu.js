import styles from './Menu.module.scss'

function Menu() {

  return (
    <div className={styles.wrap}>
      <div className={styles.menu}>
        <div className={styles.header}>
          <p>Записи</p>
        </div>
        <div className={styles.items}>
          <p>Все записи</p>
        </div>
        <div className={styles.items}>
          <p>Добавить запись</p>
        </div>
        <div className={styles.header}>
          <p>Медиафайлы</p>
        </div>
        <div className={styles.items}>
          <p>Библиотека</p>
        </div>
        <div className={styles.items}>
          <p>Добавить новый</p>
        </div>
      </div>
    </div>
  )
}

export {Menu}
