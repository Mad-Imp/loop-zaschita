import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './Form.module.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        },
    marginTop: '2rem '
    },
    button: {
        width: '100%',
        marginLeft: 8
    }

}));

export default function Form() {
    const classes = useStyles();




    return (
        <div className={styles.form}>
            <h2>Задайте свой вопрос</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField required
                               id="outlined-required"
                               label="Имя"
                               variant="outlined"
                               fullWidth
                    />
                    <TextField required
                               id="outlined-search"
                               label="E-mail"
                               type="email"
                               variant="outlined"
                    />
                    <TextField required
                               id="outlined-helperText"
                               label="Вопрос"
                               variant="outlined"
                               multiline
                               rows={5}
                    />
                </div>
                <Button className={classes.button} variant="contained" color="primary" type="submit" onClick={e => e.preventDefault()}>
                    Отправить
                </Button>
            </form>
        </div>
    );
}