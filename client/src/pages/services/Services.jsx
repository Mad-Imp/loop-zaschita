import styles from './Services.module.scss';
import ServicesList from "./components/servicesList/ServicesList";
import Info from "./components/info/Info";
import ActivityList from "./components/activityList/ActivityList";

export default function Services() {
    return <div>
        <h1 className={styles.title}>Юридические услуги в&nbsp;Липецке и Липецкой&nbsp;области</h1>
        <h3 className={styles.subtitle}>ЛООП «Защита» является социально ориентированной организацией. </h3>
        <div className={styles.wrap}>
            <Info/>
            <ServicesList/>
        </div>
        <ActivityList/>
    </div>
}