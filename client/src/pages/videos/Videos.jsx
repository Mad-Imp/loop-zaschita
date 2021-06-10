import VideoComponent from "./components/videoComponent/VideoComponent";
import styles from './Videos.module.scss';

export default function Videos() {
    return <div className={styles.wrap}>
        <h1 className={styles.title}>О нас в СМИ</h1>
        <VideoComponent/>
    </div>
}