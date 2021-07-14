import styles from "./About.module.scss";
import OrganizationHistory from "./components/organizationHistory/OrganizationHistory";
import OrganizationActivity from "./components/organizationActivity/OrganizationActivity";
import Achievements from "./components/achievements/Achievements";

export default function About() {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Об&nbsp;объединении ЛООП&nbsp;«Защита»</h1>
            <OrganizationActivity/>
            <OrganizationHistory/>
            <Achievements/>
        </div>
    )
}

