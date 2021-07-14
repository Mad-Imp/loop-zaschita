import styles from './Contacts.module.scss'
import Popup from '../../../../../components/popup/Popup'
import Button from '../../../../../components/button/Button'
import CallIcon from '@material-ui/icons/Call'
import logo from '../../logo.png'
import {useState} from 'react'

function Contacts() {
    const [open, setOpen] = useState(false)

    const closePopup = (e) => {
        if (e.target.id === 'overlay' || e.currentTarget.id === 'close') {
            setOpen(false)
            setScroll()
        }
    }
    const setHidden = () => {
        if (!open) document.body.style.overflow = 'hidden'
    }
    const setScroll = () => {
        document.body.style.overflow = 'scroll'
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.contacts}>
                    <img src={logo} alt="лого" className={styles.logo}/>
                    <div className={styles.wrap}>
                        <CallIcon className={styles.icon}/>
                        <a className={styles.phone} href="tel:+74742476245">+7(4742) 47-62-45</a>
                        <Button onClick={() => {
                            setOpen(true)
                            setHidden()
                        }} content="Написать нам"/>
                        {open && <Popup closePopup={closePopup} setOpen={setOpen}/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts