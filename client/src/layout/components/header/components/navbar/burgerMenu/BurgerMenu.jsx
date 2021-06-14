import styles from '../Navbar.module.scss'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import NavLinks from '../navLinks/NavLinks'
import {useState} from 'react'

export default function BurgerMenu() {
    const [open, setOpen] = useState(false)

    const burgerIcon = <MenuIcon className={styles.menuIcon}
                                 fontSize="large"
                                 onClick={() => setOpen(!open)}/>
    const closeIcon = <CloseIcon className={styles.menuIcon}
                                 fontSize="large"
                                 onClick={() => setOpen(!open)}/>

    const closeBurgerMenu = () => {
        setOpen(false);
    }

    return (
        <div className={styles.mobileNavigation}>
            <div className={styles.container}>
                {open ? closeIcon : burgerIcon}
                {open && <NavLinks isMobile={true} closeMenu={closeBurgerMenu}/>}
            </div>
        </div>
    )
}