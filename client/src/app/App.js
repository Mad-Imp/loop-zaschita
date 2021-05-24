import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styles from './App.module.scss';
import '../scss/variables.scss'
import Header from '../layout/header/Header';
import Main from '../pages/main/Main';
import Services from "../pages/services/Services";
import ContactsPage from '../pages/contacts/ContactsPage';
import Footer from "../layout/footer/Footer";


function App() {
    return (
        <div className={styles.content}>
            <Router>
                <Header/>
                <main className={styles.content_route}>
                    <Switch>
                        <Route exact path="/">
                            <Main/>
                        </Route>
                        <Route path="/services">
                            <Services/>
                        </Route>
                        <Route path="/contacts">
                            <ContactsPage/>
                        </Route>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
