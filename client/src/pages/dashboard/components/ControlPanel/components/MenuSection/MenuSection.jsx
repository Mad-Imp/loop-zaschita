import {Route, Switch} from "react-router-dom";
import styles from './MenuSection.module.scss'
import {AddNews} from './components/AddNews/AddNews';
import {Media} from './components/Media/Media';
import {AddMedia} from './components/AddMedia/AddMedia';
import {NewsAdmin} from './components/News/NewsAdmin';

function MenuSection() {
  return (
    <div className={styles.menuSection}>
      <Switch>
        <Route exact path="/dashboard/news">
          <NewsAdmin/>
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