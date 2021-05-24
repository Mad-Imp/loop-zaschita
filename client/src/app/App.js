import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styles from './App.module.scss';
import '../scss/variables.scss'
import Header from '../layout/components/header/Header';
import Main from '../pages/main/Main';
import ContactsPage from '../pages/contacts/ContactsPage';
import {Layout} from '../layout/Layout';
import {About} from '../pages/about/About';
import {News} from '../pages/news/News';

import {Dashboard} from '../pages/dashboard/Dashboard';

function App() {
    return (
        <div className={styles.content}>

                <Router>
                    <Layout>
                    <main className={styles.content_route}>
                        <Switch>
                            <Route exact path="/">
                                <Main/>
                            </Route>
                            <Route path="/contacts">
                                <ContactsPage/>
                            </Route>
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/news">
                                <News/>
                            </Route>
                            <Route path="/services">
                                {/*<Services/>*/}
                            </Route>
                            <Route path="/dashboard">
                                <Dashboard/>
                            </Route>

                        </Switch>
                    </main>
                    </Layout>
                </Router>

        </div>
    );
}

export default App;
