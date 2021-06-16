import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {SignIn} from './components/SignIn/Signin';
import styles from './Dashboard.module.scss'
import {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {useAuth} from '../../hooks/auth.hook';
import {AddNews} from './components/AddNews/AddNews'

function Dashboard() {
    const auth = useContext(AuthContext)
    const {token, login, logout, id, role} = useAuth()
    const isAuthenticated = !!token
    return (
        <AuthContext.Provider value={{
            token, login, logout, id, role, isAuthenticated
        }}>
            <div className={styles.wrap}>
                <Router>
                    <Switch>
                        <Route path="/dashboard">
                            {(isAuthenticated) ?
                                <AddNews/> :
                                <SignIn login={login} token={token} id={id} role={role}/>
                            }
                        </Route>
                    </Switch>
                </Router>
            </div>
        </AuthContext.Provider>
    )
}

export {Dashboard}