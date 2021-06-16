import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styles from './News.module.scss';
import Pagination from '@material-ui/lab/Pagination';
import {useEffect, useState} from "react";
import NewsItem from "./components/newsItem/NewsItem";
import NewsContent from "./components/newsContent/NewsContent";
import Cards from '../../components/cards/Cards';
import LinearProgress from '@material-ui/core/LinearProgress';

function News() {
    const [news, setNews] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const pageLimit = 10,
        lastNewsIndex = currentPage * pageLimit,
        firstNewsIndex = lastNewsIndex - pageLimit,
        currentNews = news.slice(firstNewsIndex, lastNewsIndex);

    const calculatePageNumbers = () => {
        const pageNumbers = [],
        quantityPages = Math.ceil(news.length / pageLimit);

        for (let i = 1; i <= quantityPages; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers.length;
    }

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    const incCount = () => {
        setCount(prevState => prevState + 1);
    }

    useEffect(() => {
        fetch('/api/news')
          .then(response => {
              return response.json()
          })
          .then(data => {
              setNews(data.reverse())
          })
    }, [count])

    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Новости</h1>
            {news.length === 0
                ? <LinearProgress/>
                : <div className={styles.container}>
                    <Switch>
                        <Route exact path="/news">
                            {currentNews.map(newsItem => (
                                <NewsItem news={newsItem} key={newsItem.id}/>
                            ))}
                            <Pagination className={styles.pagination}
                                        page={currentPage}
                                        count={calculatePageNumbers()}
                                        onChange={handleChange}
                                        variant="outlined"
                                        shape="rounded"
                                        color="primary"/>
                            <div className={styles.cards}><Cards/></div>
                        </Route>
                        <Route exact path="/news/:id"><NewsContent incCount={incCount} news={news}/></Route>
                    </Switch>
                </div>
            }
        </div>
    )
}

export {News}

