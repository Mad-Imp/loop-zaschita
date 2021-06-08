import styles from './OrganizationActivity.module.scss';
import rodionov from '../../../../assets/img/rodionov.jpg';
import betenekov from '../../../../assets/img/betenekov.jpg';

export default function OrganizationActivity() {
    return <div>
        <h2 className={styles.title}>Деятельность</h2>
        <div className={styles.block}>
            <div className={styles.photo_section}>
                <img className={styles.photo} src={rodionov} alt="Родионов Василий Иванович"/>
                <div className={styles.name}>
                    <p>Родионов Василий Иванович</p>
                    <p className={styles.subtitle}>Председатель ЛООП&nbsp;«Защита</p>
                </div>
            </div>
            <div className={styles.photo_section}>
                <img className={styles.photo} src={betenekov} alt="Бетенеков Владимир Николаевич"/>
                <div className={styles.name}>
                    <p>Бетенеков Владимир Николаевич</p>
                    <p className={styles.subtitle}>Ведущий юрист</p>
                </div>
            </div>
        </div>
        <div className={styles.block}>
            <div className={styles.item}>
                <p className={styles.slogan}>Девиз объединения:<br/> ПРАВО – защита наших ПРАВ.</p>
                <p>ЛООП&nbsp;«Защита» сотрудничает с реально действующими НПО Липецкой области.
                    По договорам с ВУЗами на базе ЛООП&nbsp;«Защита» некоторые студенты проходят производственную и
                    преддипломную практику.</p>
                <p>
                    Задолго до появления федерального и областного законов о бесплатной юридической помощи ЛООП&nbsp;«Защита» начала оказывать благотворительные юридические услуги льготным категориям граждан,
                    людям, оказавшимся в трудной жизненной ситуации. За помощью обращались не только жители
                    областного центра Липецка, но и из районов области. </p>
                <p>Более 7&nbsp;тыс. сельским жителям были оказаны юридические услуги при выездах юристов «Защиты» в
                    районы области.</p>
            </div>
            <div className={styles.item}>
                <p>С 2019 г. по настоящее время ЛООП&nbsp;«Защита» реализует свой социальный проект «Доступная
                    юридическая помощь, как фактор повышения качества жизни людей» на средства Фонда
                    «Милосердие» НЛМК, президентского гранта и областной субсидии. </p>
                <p>Сегодня упор делается на доступность юридической помощи, но уже не только в районных центрах,
                    но и по месту жительства селян – в сельских поселениях с численностью жителей порядка 1000
                    чел.</p>
                <p>Партнерами этой деятельности являются Уполномоченный по правам человека в&nbsp;Липецкой&nbsp;области,
                    Союз муниципальных образований Липецкой&nbsp;области, администрации муниципальных районов и
                    сельских поселений, межпоселенческие и поселенческие библиотеки.</p>
                <p>Ежегодно юристы ЛООП&nbsp;«Защита» в среднем оказывают благотворительные юридические услуги
                    порядка 1000 гражданам, в т.ч. социально-правовую помощь получают около 500 человек льготных
                    категорий.
                </p>
            </div>
        </div>
    </div>
}