import {useEffect, useState} from 'react';
import styles from './NewsAdmin.module.scss'
import Button from '@material-ui/core/Button';

function NewsAdmin() {

    const [news, setNews] = useState([])
    const [count, setCount] = useState(news.length)
    const [hideDeleteWindow, setHideDeleteWindow] = useState(false)

    const deleteHandler = (id) => {
        let item = {
            id: id
        }
        fetch('/api/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(item)
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
            })
        setCount((prevState => prevState - 1))
        setHideDeleteWindow(false)
    }

    const deleteConfirm = () => {
        setHideDeleteWindow(prevState => true)
    }

    useEffect(() => {
        fetch('/api/news')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setNews(data)
            })
    }, [count])

    console.log(news)

    return (
        <div className={styles.wrap}>
            <h1>Последнии запсиси</h1>
            {
                news.map((item) => {
                    return (
                        <div key={item.id} className={styles.item}>
                            <h1>{item.title}</h1>
                            <p>{item.date}</p>
                            <p>
                                {item.description.length > 200 ?
                                    item.description.substr(0, 200) + '...' :
                                    item.description}
                            </p>
                            <p>
                <span
                    className={styles.editPointer}
                >
                  Редактировать
                </span>
                                <span
                                    className={styles.editPointer}
                                    onClick={deleteConfirm}
                                >
                  Удалить
                </span>
                            </p>
                            {hideDeleteWindow ? (<div className={styles.deleteConfirm}>
                                <div className={styles.deleteWrap}>
                                    <div>
                                        <p>Вы действительно хотите удалить новость</p>
                                        <Button variant="contained" color="secondary"
                                                onClick={() => deleteHandler(item.id)}>Удалить</Button>
                                    </div>
                                </div>
                            </div>) : null}
                        </div>
                    )
                })
            }
        </div>
    )
}

export {NewsAdmin}