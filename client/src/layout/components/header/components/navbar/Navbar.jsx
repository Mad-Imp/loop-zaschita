import styles from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className={styles.navwrap}>
            <ul className={styles.nav}>
                <li className={styles.item}>
                    <NavLink exact to={"/"} activeStyle={{borderBottom: '2px solid #4673B5FF'}}>Главная</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to={"/about"} activeStyle={{borderBottom: '2px solid #4673B5FF'}}>Об организации</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to={"/news"} activeStyle={{borderBottom: '2px solid #4673B5FF'}}>Новости</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to={"/services"} activeStyle={{borderBottom: '2px solid #4673B5FF'}}>Услуги</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to={"/contacts"} activeStyle={{borderBottom: '2px solid #4673B5FF'}}>Контакты</NavLink>
                </li>

            </ul>
        </div>
    )

}

export default Navbar;