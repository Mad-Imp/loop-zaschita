import Contacts from "../../components/contact/Contacts";
import Map from "../../components/contact/Map";
import Form from "../../components/contact/Form";
import styles from './ContactsPage.module.scss';

export default function ContactsPage() {
    return (
        <>
            <div className={styles.wrap}>
                <Contacts/>
                <Form/>
            </div>
            <Map/>
        </>

    )
}