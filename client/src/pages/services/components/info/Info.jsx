import {makeStyles} from '@material-ui/core/styles';
import styles from './Info.module.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        maxWidth: '32rem',
        backgroundColor: 'rgba(253,253,253,0.89)',
        margin: '2.5rem 2.5rem 2.5rem 0',
    },


});

export default function Info() {
    const classes = useStyles();

    const categoryCitizens = [
        'Инвалиды 1 и 2 группы',
        'Малоимущие граждане: граждане, у которых среднедушевой доход семей ниже величины прожиточного минимума, установленного в субъекте РФ в соответствии с законодательством РФ или одиноко проживающие граждане, доходы которых ниже величины прожиточного минимума',
        'Ветераны Великой Отечественной войны, Герои Российской Федерации, Герои Советского Союза, Герои Социалистического Труда, Герои Труда Российской Федерации',
        'Дети-инвалиды, дети-сироты, дети, оставшиеся без попечения родителей, лица из числа детей сирот и детей, оставшихся без попечения родителей, а так же их законные представители и представители, если они обращаются за оказанием бесплатной юридической помощи по вопросам, связанным с обеспечением и защитой прав и законных интересов таких детей',
    ]

    return <>
        <Card className={styles.root}>
            <CardContent className={classes.content}>
                <h2 className={styles.title}>Категории граждан, которым оказываются
                    бесплатные юридические консультации
                    в&nbsp;ЛООП&nbsp;«Защита»:</h2>
                {categoryCitizens.map(item => {
                   return <p className={styles.paragraph}>{item}</p>
                })}
                <p className={styles.note}>Для остальных категорий граждан услуги оказываются
                    по существенно низкой цене, отличающейся от стоимости
                    услуг иных юристов и адвокатов в 2-3 раза</p>
            </CardContent>
        </Card>
    </>
}
