import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    timeline: {
        margin: '3rem 0',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    paper: {
        padding: '1rem',
    },
    title: {
        color: '#5E5E5F',
    },
    content: {
        color: '#5E5E5F',
    },
    dot: {
        backgroundColor: '#4673b5'
    },
    mobile: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
        marginLeft: '1rem',
    },
    period: {
        display: 'block',
        marginBottom: '1rem',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: '1.2rem',
    },
    description: {
        marginBottom: '2rem',
        lineHeight: '1.4rem',
    }
}));

const timelineContent = [
    {
        content: 'Председатель ЛООП «Защита» Родионов В.И. – участник встречи Президента РФ Путина В.В. с 30 руководителями НКО в Кремле',
        year: 'В 2001 г.'
    },
    {
        content: 'Инициатор проведения первого Липецкого регионального Гражданского Форума (проводится по настоящее время)',
        year: 'В 2005 г.'
    },
    {
        content: 'Инициатор создания Общественного Совета при УВД Липецкой области',
        year: 'В 2007 г.'
    },
    {
        content: 'Инициатор создания Клуба лидеров НКО Липецкой области (действует по настоящее время)',
        year: 'В 2011 г.'
    },
    {
        content: 'При ЛООП «Защита» работает единственный при СО НКО негосударственный центр бесплатной юридической помощи',
        year: 'С 2013 г.'
    },
    {
        content: 'ЛООП «Защита» стала первым из СО НКО Липецкой области поставщиком социально-правовых услуг',
        year: 'В 2014 г.'
    },
    {
        content: 'ЛООП «Защита» стала первым в России исполнителем общественно полезной услуги «содействие в предоставлении бесплатной юридической помощи (СО НКО – ИОПУ)',
        year: 'В 2017 г.'
    },
    {
        content: 'ЛООП «Защита» - стала первой из социально - ориентированных некоммерческих организаций (СО НКО) Липецкой области, включенных в Реестр поставщиков социальных услуг в Липецкой области',
        year: 'В 2017 г.'
    },
    {
        content: 'ЛООП «Защита» стала первой в России СО НКО, которой был присвоен статус «исполнитель общественно полезной услуги «содействие в предоставлении бесплатной юридической помощи», что является своеобразным знаком качества работы. СО НКО – ИОПУ ЛООП «Защита» внесена в Реестр Министерства юстиции Российской федерации под № 15-0170009 (девять)',
        year: 'В 2017 г.'
    },
]

export default function CustomizedTimeline() {
    const classes = useStyles();
    return (
        <>
            <Timeline align="alternate" className={classes.timeline}>
                {timelineContent.map((item, index) => {
                    return <TimelineItem className={classes.item} key={index}>
                        <TimelineSeparator>
                            <TimelineDot className={classes.dot}/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" className={classes.title}>{item.year}</Typography>
                                <Typography className={classes.content}>{item.content}</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                })}
            </Timeline>

            <div className={classes.mobile}>
                {timelineContent.map((item, index) => {
                    return <div key={index}>
                        <span className={classes.period}>{item.year}</span>
                        <p className={classes.description}>{item.content}</p>
                    </div>
                })}
            </div>
        </>

    );
}
