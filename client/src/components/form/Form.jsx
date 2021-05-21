import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from './Form.module.scss';
import { useForm } from "react-hook-form";

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

const schema = yup.object().shape({
    name: yup.string()
        .matches(/^[а-яА-ЯЁё ( )]*$/, 'Можно вводить только русские буквы')
        .required('Введите имя'),
    email: yup.string()
        .email('Введите корректный e-mail')
        .required('Введите e-mail'),
    text: yup.string()
        .matches(/^[^< >]*$/, 'В тексте не могут содержаться символы < >')
        .required('Введите ваш вопрос'),
})

export default function Form() {
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors }} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);

        const res = fetch('/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(data)
                    })
                    .then((response) => response.json())
                    .then((json) => console.log(json));

    };

    return (
        <div className={styles.form}>
            <h2>Задайте свой вопрос</h2>
            <form className={classes.root} noValidate={false} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextField required
                               id="outlined-required"
                               label="Имя"
                               name="name"
                               variant="outlined"
                               fullWidth
                               {...register('name')}
                               error={!!errors.name}
                               helperText={errors?.name?.message}
                    />
                    <TextField required
                               id="outlined-search"
                               label="E-mail"
                               name="email"
                               type="email"
                               variant="outlined"
                               {...register('email')}
                               error={!!errors.email}
                               helperText={errors?.email?.message}
                    />
                    <TextField required
                               id="outlined-helperText"
                               label="Вопрос"
                               name="text"
                               type="text"
                               variant="outlined"
                               multiline
                               rows={5}
                               {...register('text')}
                               error={!!errors.text}
                               helperText={errors?.text?.message}
                    />
                </div>
                <Button className={classes.button}
                        variant="contained"
                        color="primary"
                        type="submit"
                >
                    Отправить
                </Button>
            </form>
        </div>
    );
}