import styles from './Menu.module.scss'
import {NavLink} from 'react-router-dom'

function Menu() {

    return (
        <div className={styles.wrap}>
            <div className={styles.menu}>
                <div className={styles.header}>
                    <p>Записи</p>
                </div>
                <div className={styles.items}>
                    <NavLink to={'/dashboard/news'} activeStyle={{borderBottom: '2px solid #4673B5FF'}}>Все
                        записи</NavLink>
                </div>
                <div className={styles.items}>
                    <NavLink to={'/dashboard/add-news'} activeStyle={{borderBottom: '2px solid #4673B5FF'}}>Добавить
                        запись</NavLink>
                </div>
                <div className={styles.header}>
                    <p>Медиафайлы</p>
                </div>
                <div className={styles.items}>
                    <NavLink to={'/dashboard/media'}
                             activeStyle={{borderBottom: '2px solid #4673B5FF'}}>Библиотека</NavLink>
                </div>
                <div className={styles.items}>
                    <NavLink to={'/dashboard/add-media'} activeStyle={{borderBottom: '2px solid #4673B5FF'}}>Добавить
                        новый</NavLink>
                </div>
            </div>
        </div>
    )
}

export {Menu}
