import {NavLink} from 'react-router-dom'
import styles from '../Navbar.module.scss'

export default function NavLinks({isMobile, closeMenu}) {
   return <ul className={styles.nav}>
        <li className={styles.item} onClick={() => isMobile && closeMenu()}>
            <NavLink exact to={'/'} activeStyle={{borderLeft: '2px solid #ffffff'}}>Главная</NavLink>
        </li>
        <li className={styles.item} onClick={() => isMobile && closeMenu()}>
            <NavLink to={'/about'} activeStyle={{borderLeft: '2px solid #ffffff'}}>Об&nbsp;организации</NavLink>
        </li>
        <li className={styles.item} onClick={() => isMobile && closeMenu()}>
            <NavLink to={'/news'} activeStyle={{borderLeft: '2px solid #ffffff'}}>Новости</NavLink>
        </li>
        <li className={styles.item} onClick={() => isMobile && closeMenu()}>
            <NavLink to={'/services'} activeStyle={{borderLeft: '2px solid #ffffff'}}>Услуги</NavLink>
        </li>
        <li className={styles.item} onClick={() => isMobile && closeMenu()}>
            <NavLink to={'/contacts'} activeStyle={{borderLeft: '2px solid #ffffff'}}>Контакты</NavLink>
        </li>
    </ul>
}