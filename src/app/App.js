import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styles from './App.module.scss';
import '../scss/variables.scss'
import Header from '../layout/header/Header';
import Main from '../pages/main/Main';
import ContactsPage from '../pages/contacts/ContactsPage';

function App() {
    return (
        <div className={styles.content}>
            <Router>
                <Header/>
                <main className={styles.content_route}>
                    <Switch>
                        <Route exact path="/"> <Main/> </Route>
                        <Route path="/contacts"> <ContactsPage/> </Route>
                    </Switch>
                </main>
            </Router>
        </div>
    );
}

export default App;
