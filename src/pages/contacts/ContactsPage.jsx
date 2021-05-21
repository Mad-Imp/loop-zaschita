import Contacts from "./components/contactInfo/ContactInfo";
import Map from "./components/map/Map";
import Form from "../../components/form/Form";
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