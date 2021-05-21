import styles from './Dashboard.module.scss'
import {Menu} from './components/Menu/Menu';
import {News} from './components/MenuSection/components/News/News';
import {AddNews} from './components/MenuSection/components/AddNews/AddNews';
import {Media} from './components/MenuSection/components/Media/Media';
import {AddMedia} from './components/MenuSection/components/AddMedia/AddMedia';
import {MenuSection} from './components/MenuSection/MenuSection';


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