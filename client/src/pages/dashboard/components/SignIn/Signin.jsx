import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './Signin.module.scss'
import Button from '@material-ui/core/Button';
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '350px',
    },
  },
  btn: {
    marginTop: '30px',
  }
}));

function SignIn() {

  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const emailhandler = (e) => {
    setEmail(e.target.value)
  }

  const passHandler = (e) => {
    setPass(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: email,
      password: pass
    }

    fetch('/api/login')
      .then(response => response.json())
      .then(data => console.log(data))

    setEmail('')
    setPass('')
  }

  return (
    <div className={styles.content}>
      <h2>Данные для входа в панель управления</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={styles.wrap}>

          <TextField
            type='email'
            onChange={emailhandler}
            value={email}
            id="standard-basic"
            label="Email"
            name='email'
          />
          <TextField
            type='password'
            onChange={passHandler}
            value={pass}
            id="standard-basic"
            label="Пароль"
            name='password'
          />
          <Button onClick={onSubmit} type='submit' variant="contained" color="primary" className={classes.btn}>
            Войти
          </Button>
        </div>
      </form>
    </div>
  )
}

export {SignIn}