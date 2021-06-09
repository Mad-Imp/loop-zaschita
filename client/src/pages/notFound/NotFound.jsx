import styles from "./NotFound.module.scss";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default function NotFound() {
    return <div className={styles.wrap}>
        <p className={styles.err}>404</p>
        <h1>Страница не найдена</h1>
        <p className={styles.description}>Cтраница, на которую вы пытаетесь попасть, не существует. <br/>Возможно, она
            была удалена или в запросе был указан неверный адрес страницы.
            <br/>Попробуйте начать с <Link to="/">Главной страницы</Link></p>
    </div>
}