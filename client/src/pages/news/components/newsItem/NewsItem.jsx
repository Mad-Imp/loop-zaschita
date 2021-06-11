import {BrowserRouter as Router, Link} from "react-router-dom";
import styles from './NewsItem.module.scss';
//Material-UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function NewsItem({news}) {

    return <Card className={styles.root}>
        <CardContent className={styles.card}>
            <Typography className={styles.title} variant="h5" component="h2">
                <Link to={`/news/${news.id}`}>
                    {news.title}
                </Link>
            </Typography>
            <Typography variant="body2" component="p">
                {news.description.length > 200 ? `${news.description.substr(0, 200)}...` : news.description}
            </Typography>
            <div className={styles.wrap}>
                <Typography variant="body2" component="p">{news.date}</Typography>
                <Button className={styles.btn} size="small"><Link to={`/news/${news.id}`}>Перейти к
                    новости</Link></Button>
            </div>
        </CardContent>
    </Card>
}