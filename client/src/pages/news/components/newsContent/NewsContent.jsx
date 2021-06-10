import {BrowserRouter as Router, Link} from "react-router-dom";
import {useParams} from 'react-router-dom';
import styles from './NewsContent.module.scss';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Slider from "./slider/Slider";

export default function NewsContent({news, incCount}) {
    const {id} = useParams();

    return <div>
        {news.filter((item) => item.id === +id).map((item, index) => (
            <div className={styles.wrap} key={index}>
                <span onClick={() => incCount()}><Link to='/news'>
                    Вернуться к новостям
                </Link>
                </span>
                <div className={styles.el}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <div className={styles.edit}>
                        <EditIcon className={styles.icon}/>
                        <DeleteForeverIcon className={styles.icon}/>
                    </div>
                </div>
                <div className={styles.slider}>
                    <Slider images={item.images}/>
                </div>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.date}>{item.date}</p>
            </div>
        ))}

    </div>
}