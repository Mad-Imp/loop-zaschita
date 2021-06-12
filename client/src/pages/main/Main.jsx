import styles from './Main.module.scss';
import Cards from '../../components/cards/Cards';


function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.cards}><Cards/></div>
        </div>
    );
}

export default Main;
