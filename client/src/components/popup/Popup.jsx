import styles from './Popup.module.scss'
import Form from '../form/Form'
import CloseIcon from '@material-ui/icons/Close'

export default function Popup({closePopup, setOpen}) {

    return (
        <div id="overlay" className={styles.popup} onClick={closePopup}>
            <div className={styles.modalDialog}>
                <div className={styles.popupContent}>
                    <CloseIcon id="close" className={styles.close} onClick={closePopup} fontSize="large"/>
                    <div className={styles.form}>
                        <Form setOpen={setOpen}/>
                    </div>
                </div>
            </div>

        </div>
    )
}