import styles from "./ContactInfo.module.scss";
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

export default function Contacts() {
    return (
        <div className={styles.contacts}>
            <h1 className={styles.title}>Контактная информация</h1>
            <div className={styles.content}>
                <CallIcon className={styles.icon}/>
                <p>Телефон для связи: <a href="tel:+74742476245">+7(4742) 47-62-45</a></p>
            </div>
            <div className={styles.content}>
                <PhoneAndroidIcon className={styles.icon}/>
                <p>Телефон ведущего юриста: <br/><a href="tel:+79046887489">+7(904) 688-74-89</a></p>
            </div>
            <div className={styles.content}>
                <MailOutlineIcon className={styles.icon}/>
                <p>E-mail: <a href="mailto:hrloph@mail.ru">hrloph@mail.ru</a></p>
            </div>
            <div className={styles.content}>
                <LocationOnIcon className={styles.icon}/>
                <p>Адрес: г.&nbsp;Липецк, ул.&nbsp;М.&nbsp;Горького, д.&nbsp;22, оф.&nbsp;18а (вход со двора,
                    цокольный этаж)</p>
            </div>
            <div className={styles.content}>
                <ScheduleIcon className={styles.icon}/>
                <p>График работы: Пн-Пт: 10:00 - 13:00</p>
            </div>
        </div>
    )
}

