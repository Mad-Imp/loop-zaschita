import styles from './OrganizationHistory.module.scss';
import team from '../../../../assets/img/team.jpg';
import meeting from '../../../../assets/img/meeting.jpg';

export default function OrganizationHistory() {
    return <div>
        <h2 className={styles.title}>История</h2>
        <div className={styles.block}>
            <div className={styles.item}>
                <p className={styles.highlight}>ЛООП&nbsp;«Защита» - одна из старейших СО НКО Липецкой&nbsp;области,
                    учрежденная
                    по инициативе жителей г.&nbsp;Липецка в декабре 1993&nbsp;г.</p>
                <p>Руководящий орган объединения - правление. На протяжении всех лет объединение возглавляет один из его
                    учредителей Родионов Василий Иванович.</p>
                <div className={styles.description}>
                    <span className={styles.count}>01</span>
                    <p>Объединением&nbsp;«Защита» реализовано 29 социальных проектов в интересах жителей
                        Липецкой&nbsp;области,
                        благодаря чему в область привлечено более 29&nbsp;млн.&nbsp;руб.</p>
                </div>
                <div className={styles.description}>
                    <span className={styles.count}>02</span>
                    <p>Более 15&nbsp;тыс. жителей Липецкой&nbsp;области, получая социально – правовую помощь и
                        благотворительные
                        юридические услуги в ЛООП&nbsp;«Защита» сэкономили порядка 13&nbsp;млн.&nbsp;руб. Эти деньги они
                        смогли
                        потратить на иные свои жизненные потребности.
                    </p>
                </div>
                <div className={styles.description}>
                    <span className={styles.count}>03</span>
                    <p>При «Защите» с&nbsp;2013&nbsp;г. работает негосударственный центр бесплатной юридической помощи –
                        единственный в области при социально ориентированной некоммерческой организации, но не
                        финансируемый из областного бюджета.</p>
                </div>

            </div>
            <div className={styles.item}>
                <div className={styles.bg}/>
                <p>В начале своей деятельности ЛООП&nbsp;«Защита» ориентировалась только на защиту прав потребителей, но
                    вот
                    уже более 25&nbsp;лет это не единственное, а одно из направлений многогранной деятельности
                    организации,
                    по защите прав и законных интересов человека и гражданина. </p>
                <span className={styles.period}>С 1996 года</span>
                <p>ЛООП&nbsp;«Защита» является членом Союза потребителей РФ на правах регионального отделения.</p>
                <span className={styles.period}>
                    С 1998 по 2006 год</span>
                <p>Сотрудничала с Московской Хельсинской Группой (МХГ).</p>
                <span className={styles.period}>
                    С 1998 по 2005 год</span>
                <p>Впервые при правозащитной организации открылась первая юридическая клиника, которой руководили
                    заместитель председателя областного суда в отставке Прозоров Горальд Борисович и правовед Лисин
                    Феликс Семенович.</p>
                <span className={styles.period}>С 2000 по 2006 год</span>
                <p>Учредитель и член Международной ассоциации общественных объединений «Коалиция «Мы, граждане!».</p>
            </div>
        </div>
        <div className={styles.block}>
            <div className={styles.item}>
                <img className={styles.photo} src={team} alt="Коллектив"/>
                <p>Учитывая недостаток адвокатов в районах области, ЛООП&nbsp;«Защита» открывала свои консультационные
                    пункты, привлекая юристов и успешно обучающихся студентов-юристов старших курсов, проживающих
                    там. </p>
                <p>
                    Пункты на протяжении нескольких лет работали в межпоселенческих библиотеках г.&nbsp;Елец,
                    г.&nbsp;Грязи, с.&nbsp;Становое, с.&nbsp;Хлевное, с.&nbsp;Волово, г.&nbsp;Данков,
                    п.&nbsp;Добринка. </p>
                <p>Это стало первым шагом на пути доступности правовой помощи и
                    просветительских брошюр по месту жительства.</p>
                <p className={styles.highlight}>ЛООП&nbsp;«Защита» - единственная организация в области, которая
                    с&nbsp;1998&nbsp;по&nbsp;2010&nbsp;гг. помогала обманутым
                    вкладчикам получать компенсационные выплаты. </p>
                <p>За эти годы около 37&nbsp;тыс. вкладчиков («Русский дом селенга», «Русская недвижимость»,
                    «Хопер-Инвест»,
                    «Ростислав», «Властелина» и др.) получили компенсации порядка 18&nbsp;млн.&nbsp;руб. из средств
                    Федерального
                    общественно-государственного фонда по защите прав вкладчиков и акционеров, в создании которого
                    «Защита» принимало участие в&nbsp;1996&nbsp;-&nbsp;1997&nbsp;гг.
                </p>
            </div>
            <div className={styles.item}>
                <p>В разные годы в объединении работало до&nbsp;20&nbsp;студентов старших курсов ВУЗов по специальности
                    «юриспруденция», получая навыки и опыт работы юриста.</p>
                <p>В течение 3&nbsp;лет (2000&nbsp;–&nbsp;2003&nbsp;гг.) по договору с Центром занятости населения
                    г.&nbsp;Липецка на базе ЛООП&nbsp;«Защита» проходили стажировку 48&nbsp;выпускников ВУЗов по
                    специальности юриспруденция, учитель
                    права. </p>
                <p>В рамках правового просвещения молодые юристы на добровольной основе готовили материалы для
                    57&nbsp;правовых просветительских брошюр, тематика для которых подбиралась на основе анализа
                    обращений
                    граждан и заявок центральных районных библиотек, с которыми «Защита» сотрудничает много лет.</p>
                <p>Выпущено брошюр общим тиражом более 60&nbsp;тыс.&nbsp;экземпляров, которые бесплатно распространяются
                    по
                    библиотекам области и раздаются гражданам во время их приемов юристами ЛООП&nbsp;«Защита».</p>
                <p className={styles.meeting}>По результатам деятельности ЛООП «Защита» ее председатель Родионов В.И. был приглашен в 12 июня 2001
                    г. на встречу в Кремле Президента РФ Путина В.В. с представителями общественных объединений.</p>
                <img className={styles.photo} src={meeting} alt="Встреча с Владимиром Путиным"/>
                <p>Родионов В.И. справа рядом с Путиным В.В. </p>


            </div>
        </div>
    </div>
}