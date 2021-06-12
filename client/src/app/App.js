import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styles from './App.module.scss';
import '../scss/variables.scss'
import Main from '../pages/main/Main';
import Services from "../pages/services/Services";
import ContactsPage from '../pages/contacts/ContactsPage';
import {Layout} from '../layout/Layout';
import About from '../pages/about/About';
import {News} from "../pages/news/News";
import {Dashboard} from '../pages/dashboard/Dashboard';
import NotFound from "../pages/notFound/NotFound";
import Videos from "../pages/videos/Videos";
import {useAuth} from '../hooks/auth.hook';
import ScrollButton from "../components/scrollButton/ScrollButton";

function App() {
  const {token, login, logout, id, role} = useAuth()
  const isAuthenticated = !!token
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
                  <Services/>
                </Route>
                <Route path="/dashboard">
                  <Dashboard/>
                </Route>
                <Route path="/videos" component={Videos}/>
                <Route component={NotFound}/>
              </Switch>
            </main>
          </Layout>
        </Router>
        <ScrollButton/>
      </div>
  );
}

export default App;
