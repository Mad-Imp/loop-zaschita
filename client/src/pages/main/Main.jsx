import styles from './Main.module.scss';
import Cards from '../../components/cards/Cards';


function Main() {
    return (
        <div className={styles.main}>
            <Cards/>
        </div>
    );
}

export default Main;
