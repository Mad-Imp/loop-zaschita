import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './Signin.module.scss'
import Button from '@material-ui/core/Button';
import {useContext, useState} from 'react';
import {AuthContext} from '../../../../context/AuthContext';

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

function SignIn(props) {

  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const auth = useContext(AuthContext)

  const emailhandler = (e) => {
    setEmail(e.target.value)
  }

  const passHandler = (e) => {
    setPass(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let data = {
      email: email,
      password: pass
    }

    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(response => response.json())
      .then(data => {
        props.login(data.token, data.role, data.id)
      })

    // setEmail('')
    // setPass('')
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

            label="Email"
            name='email'
          />
          <TextField
            type='password'
            onChange={passHandler}
            value={pass}

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