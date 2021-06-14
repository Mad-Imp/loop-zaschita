import styles from './Navbar.module.scss'
import BurgerMenu from './burgerMenu/BurgerMenu'
import Navigation from './navigation/Navigation'

function Navbar() {
    return (
        <nav className={styles.navWrap}>
            <Navigation/>
            <BurgerMenu/>
        </nav>
    )

}

export default Navbar