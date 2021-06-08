import {Route, Switch} from "react-router-dom";
import styles from './MenuSection.module.scss'
import {News} from '../../../../../news/News';
import {AddNews} from './components/AddNews/AddNews';
import {Media} from './components/Media/Media';
import {AddMedia} from './components/AddMedia/AddMedia';

function MenuSection() {
  return (
    <div className={styles.menuSection}>
      <Switch>
        <Route exact path="/dashboard/news">
          <News/>
        </Route>
        <Route path="/dashboard/add-news">
          <AddNews/>
        </Route>
        <Route path="/dashboard/media">
          <Media/>
        </Route>
        <Route path="/dashboard/add-media">
          <AddMedia/>
        </Route>
      </Switch>
    </div>
  )
}

export {MenuSection}