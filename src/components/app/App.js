import styles from './App.module.scss';
import '../../scss/variables.scss'
import Header from '../header/Header';
import Main from '../main/Main';

function App() {
    return (
        <div className={styles.content}>
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
