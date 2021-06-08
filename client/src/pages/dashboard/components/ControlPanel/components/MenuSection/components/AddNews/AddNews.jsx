import styles from './AddNews.module.scss'
import {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import {TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  header: {
    marginBottom: '1.6rem'
  },
  article: {
    marginBottom: '1.6rem'
  },
  btn: {
    marginRight: 15
  }
}));

function AddNews() {

  const classes = useStyles();
  const [file, setFile] = useState('')
  const [images, setImages] = useState([])
  const [header, setHeader] = useState('')
  const [article, setArticle] = useState('')


  const nameField = useRef(null);

  const imageHandler = (e) => {
    setFile(() => e.target.files[0])
  }

  const closeHandler = (index) => {
    let arr = [...images]
    arr.splice(index, 1)
    setImages(arr)
  }

  const articleHandler = (e) => {
    setArticle(e.target.value)
  }

  const headerHandler = (e) => {
    setHeader(e.target.value)
  }
let arr
  const str = 'gdgd/ngdgd/ngsfsf dgdgd/nsffs'
  const a = (asd) => {
    arr = asd.split('/n')
    // console.log(str.replace(/\/n/g, () => <br/>))
  }
  a(str)

  const send = () => {
    const data = new FormData();
    data.append("file", file)
    let img = ''
    axios.post("/upload", data)
      .then(res => {
        return img = res.data.file
      })
      .then(data => {
        let imgs = [...images]
        imgs.push(data)
        setImages(imgs)
      })
      .catch(err => console.log(err))
  }

  const sendForm = () => {
    let form = {
      header: header,
      article: article,
      images: images.join(' - ')
    }
    fetch("/api/publish",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(form)
      })
      .then((res) => {
        if (res.status === 200) {
          setHeader('')
          setArticle('')
          setImages([])
          console.log('Новость успешно добавлена')
        }
      })
      .catch(function(res){ console.log(res.status) })
  }

  useEffect(() => {
  })

  return (
    <div className={styles.wrap}>
      <div>
        {arr.map(item => {
          return <p className={styles.textMargin}>{item}</p>
        })}
      </div>
      <TextField
        className={classes.header}
        id="outlined-textarea"
        label="Заголовок новости"
        placeholder="Введите текст"
        value={header}
        fullWidth
        onChange={headerHandler}
        multiline
        variant="outlined"
      />
      <TextField
        id="outlined-textarea"
        className={classes.article}
        label="Текст новости"
        placeholder="Введите текст"
        value={article}
        fullWidth
        onChange={articleHandler}
        multiline
        rows={10}
        variant="outlined"
      />
      <form action='#'>
        <input ref={nameField} className={styles.input} onChange={imageHandler} name='myImage' type="file"/>
      </form>
      <Button className={classes.btn} variant="contained" onClick={() => nameField.current.click()}>Выбрать фото</Button>
      <Button className={classes.btn} variant="contained" onClick={send}>Прикрепить фото</Button>
      <Button onClick={sendForm} variant="contained" color="primary">Сохранить</Button>
      <div className={styles.wrapImages}>
        {images.map((img, index) => {
          return <div className={styles.wrapImg}>
            <HighlightOffIcon onClick={() => closeHandler(index)} className={styles.icon}/>
            <img className={styles.imgs} src={img} key={index} alt='image'/>
          </div>
        })}
      </div>
    </div>
  )
}

export {AddNews}