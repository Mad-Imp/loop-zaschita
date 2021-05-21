import styles from './Dashboard.module.scss'
import {Menu} from './Menu';
import {News} from './News';
import {AddNews} from './AddNews';
import {Media} from './Media';
import {AddMedia} from './AddMedia';
import {MenuSection} from './MenuSection';


function Dashboard() {
  const apps = [<News/>]

  return (
    <div className={styles.dash}>
      <Menu/>
      <MenuSection/>
    </div>
  )
}

export default Dashboard