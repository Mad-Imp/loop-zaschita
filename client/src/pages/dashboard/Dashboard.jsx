import ControlPanel from './components/ControlPanel/ControlPanel';
import {SignIn} from './components/SignIn/Signin';
import styles from './Dashboard.module.scss'

function Dashboard() {
  return (
    <div className={styles.wrap}>
      {/*<ControlPanel/>*/}
      <SignIn/>
    </div>
  )
}

export {Dashboard}