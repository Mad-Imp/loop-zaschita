import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import styles from './News.module.scss';
import {useEffect, useState} from "react";
import NewsItem from "./components/newsItem/NewsItem";
import NewsContent from "./components/newsContent/NewsContent";
import Cards from '../../components/cards/Cards';


function News() {
    const [news, setNews] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('/api/news')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setNews(data.reverse())
            })
        console.log('UseEffect')

    }, [count])

    const incCount = () => {
        setCount(prevState => prevState + 1);
    }

    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Новости</h1>
            <div className={styles.container}>
                <Switch>
                    <Route exact path="/news">
                        {news.map(newsItem => (
                            <NewsItem news={newsItem} key={newsItem.id}/>
                        ))}
                        <div className={styles.cards}><Cards/></div>
                    </Route>
                    <Route exact path="/news/:id"><NewsContent incCount={incCount} news={news}/></Route>
                </Switch>
            </div>
        </div>
    )
}

export {News}

