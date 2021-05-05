import styles from './Main.module.scss';
import Cards from '../cards/Cards';

function Main() {
  return (
    <div className={styles.main}>
      <Cards/>
    </div>
  );
}

export default Main;
