import {NavLink} from 'react-router-dom'
import styles from '../Navbar.module.scss'

export default function NavLinks({isMobile, closeMenu}) {
   return <ul className={styles.nav}>
        <li className={styles.item} onClick={() => isMobile && closeMenu()}>
            <NavLink exact to={'/'} activeStyle={{borderBottom: '2px solid #4673b5'}}>Главная</NavLink>
        </li>
        <li className={styles.item} onClick={() => isMobile && closeMenu()}>
            <NavLink to={'/about'} activeStyle={{borderBottom: '2px solid #4673b5'}}>Об&nbsp;организации</NavLink>
        </li>
        <li className={styles.item} onClick={() => isMobile && closeMenu()}>
            <NavLink to={'/news'} activeStyle={{borderBottom: '2px solid #4673b5'}}>Новости</NavLink>
        </li>
        <li className={styles.item} onClick={() => isMobile && closeMenu()}>
            <NavLink to={'/services'} activeStyle={{borderBottom: '2px solid #4673b5'}}>Услуги</NavLink>
        </li>
        <li className={styles.item} onClick={() => isMobile && closeMenu()}>
            <NavLink to={'/contacts'} activeStyle={{borderBottom: '2px solid #4673b5'}}>Контакты</NavLink>
        </li>
    </ul>
}