import styles from '../Navbar.module.scss'
import NavLinks from '../navLinks/NavLinks'

export default function Navigation() {
    return <div className={styles.navigation}>
        <div className={styles.content}>
            <NavLinks/>
        </div>
    </div>
}