import styles from './ControlPanel.module.scss'
import {Menu} from './components/Menu/Menu';
import {MenuSection} from './components/MenuSection/MenuSection';


function ControlPanel() {

    return (
        <div className={styles.dash}>
            <Menu/>
            <MenuSection/>
        </div>
    )
}

export default ControlPanel