import styles from './Navbar.module.scss';

function Navbar() {
    return (
        <>
                <ul className={styles.nav}>
                    <li className={`${styles.item} ${styles.main}`}><a href="#">Главная</a></li>
                    <li className={styles.item}><a href="#">Об организации</a></li>
                    <li className={styles.item}><a href="#">Новости</a></li>
                    <li className={styles.item}><a href="#">Услуги</a></li>
                    <li className={styles.item}><a href="#">Контакты</a></li>
                </ul>
        </>
    )

}

export default Navbar;