import styles from './Footer.module.scss'
import {Link} from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from "@material-ui/icons/Call";


function Footer() {

    const currentTime = new Date()

    return (
        <footer className={styles.footer}>
            <div className={styles.wrap}>
                <div className={styles.logo}>
                    <div style={{marginRight: '2rem'}}>
                        <p style={{fontWeight: '500', fontSize: '1.1rem', lineHeight: '1.5rem'}}>Липецкое&nbsp;областное<br/>объединение&nbsp;потребителей
                        </p>
                        <p style={{color: '#4673b5', fontWeight: '500', fontSize: '1.4rem'}}>«ЗАЩИТА»</p>
                        <p style={{}}>Основано в 1994 году</p>
                        <Link to='/policy'>Политика&nbsp;конфиденциальности</Link>
                        <p style={{fontWeight: '500', fontSize: '1.1rem', marginTop: '2rem'}}>© {currentTime.getFullYear()} г.</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <p className={styles.contacts}>Контакты</p>
                    <div className={styles.content}>
                        <LocationOnIcon className={styles.icon}/>
                        <p>г.&nbsp;Липецк, ул.&nbsp;М.&nbsp;Горького, д.&nbsp;22, оф.&nbsp;18а</p>
                    </div>
                    <div className={styles.content}>
                        <CallIcon className={styles.icon}/>
                        <p><a href="tel:+74742476245">+7&nbsp;(4742)&nbsp;47-62-45</a></p>
                    </div>
                    <div className={styles.content}>
                        <PhoneAndroidIcon className={styles.icon}/>
                        <p><a href="tel:+79046887489">+7&nbsp;(904)&nbsp;688-74-89</a></p>
                    </div>
                    <div className={styles.content}>
                        <MailOutlineIcon className={styles.icon}/>
                        <p><a href="mailto:hrloph@mail.ru">hrloph@mail.ru</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export {Footer}
