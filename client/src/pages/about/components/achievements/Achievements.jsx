import Timeline from '../timeline/Timeline';
import styles from './Achievements.module.scss';

export default function Achievements() {
    return <div>
        <h2 className={styles.title}>Достижения</h2>
        <Timeline/>
    </div>
}

