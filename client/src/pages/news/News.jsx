import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import styles from './News.module.scss';
import {useEffect, useState} from "react";
import NewsItem from "./components/newsItem/NewsItem";
import NewsContent from "./components/newsContent/NewsContent";


function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/api/news')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setNews(data)
            })
    }, [])

    return (
        <div>
            <h1 className={styles.title}>Новости</h1>
            <div className={styles.wrap}>
                <Switch>
                    <Route exact path="/news">{news.reverse().map(newsItem => (
                        <NewsItem news={newsItem} key={newsItem.id}/>
                    ))}
                    </Route>
                    <Route path="/news/:id"><NewsContent news={news}/></Route>
                </Switch>
            </div>
        </div>
    )
}

export {News}

