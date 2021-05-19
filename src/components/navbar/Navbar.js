import styles from './Navbar.module.scss';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <>
            <ul className={styles.nav}>
                <li className={`${styles.item} ${styles.main}`}><Link to={"/"}>Главная</Link></li>
                <li className={styles.item}><Link to={"/about"}>Об организации</Link></li>
                <li className={styles.item}><Link to={"/news"}>Новости</Link></li>
                <li className={styles.item}><Link to={"/services"}>Услуги</Link></li>
                <li className={styles.item}><Link to={"/contacts"}>Контакты</Link></li>

            </ul>
        </>
    )

}

export default Navbar;