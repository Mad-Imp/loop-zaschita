import styles from './VideoComponent.module.scss';

export default function VideoComponent() {
    const videos = [
        {
            title: 'Фильм о ЛООП "Защита"',
            url: 'https://www.youtube.com/embed/6kbdeFz1BhI'
        },
        {
            title: 'Репортаж Липецкое время',
            url: 'https://vk.com/video_ext.php?oid=-145968677&id=456239017&hash=56b736a20efc8b8a'
        },
        {
            title: 'ТВК Липецк. Новости Плюс. Где нас обманывают коммунальщики ? И как защитить свои права? Об этом  и не только юрист ЛООП "Защита" Владимир Бетенеков',
            url: 'https://www.youtube.com/embed/ar1i1ZlXjds'
        },
        {
            title: 'ТВК Липецк. Новости Плюс. Какие самые распространенные нарушения прав граждан встречаются в сфере жилищно-коммунального хозяйства и как  правильнее эти права защищать? Об этом юрист ЛООП "Защита" Владимир Бетенеков',
            url: 'https://www.youtube.com/embed/E0cg4c1cwSg'
        },
        {
            title: 'ТВК Липецк. Новости Плюс. О работе по возвращению или частичной компенсации средств обманутых вкладчиков различных финансовых структур. Об этом юрист ЛООП "Защита" Владимир Бетенеков',
            url: 'https://www.youtube.com/embed/nQ7s7u6qOZE'
        },

    ]

    return (
        videos.map((video, index) => (
            <div key={index}>
                <h3 className={styles.title}>{video.title}</h3>
                <iframe className={styles.video} title={video.title} src={video.url} allowFullScreen/>
            </div>
        ))
    )
}