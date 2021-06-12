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

function AddNews(props = {}) {
    let imgs = []
    let title = ''
    let descr = ''

    if (Object.keys(props).length > 0) {
        if (props.images.length === 1 && props.images !== '0') {
            imgs.push(props.images[0])
        } else if (props.images.length > 1) {
            imgs = props.images.split(' - ')
        }
        title = props.title
        descr = props.description
    }

    const classes = useStyles();
    const [file, setFile] = useState('')
    const [images, setImages] = useState(imgs)
    const [header, setHeader] = useState(title)
    const [article, setArticle] = useState(descr)
    const [msg, setMsg] = useState('')

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
    // let arr

    const downloadImage = () => {
        nameField.current.click()
    }

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

    const refreshNews = () => {
        let img;
        if (images.length === 0) {
        }
        let form = {
            id: props.id,
            header: header,
            article: article,
            images: images.length === 0 ? 0 : images.join(' - ')
        }
        fetch("/api/refreshnews",
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
                  console.log('Новость успешно изменена')
              }
          })
          .then(props.show())
          .then(props.count())
          .catch(function (res) {
              console.log(res.status)
          })
    }

    const sendForm = () => {
        if (header.length < 5) {
            setHeader("Введите заголовок")
        } else {
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
                      setMsg('Новость успешно добавлена')
                      setTimeout(() => {
                          setMsg('')
                      }, 5000)
                  }
              })
              .catch(function (res) {
                  console.log(res.status)
              })
        }
    }

    useEffect(() => {
        if (file) {
            send()
            setFile('')
        }
        console.log(nameField)
    }, [file])



    return (
        <div className={styles.wrap}>
            {/*<div>*/}
            {/*    {arr.map(item => {*/}
            {/*        return <p className={styles.textMargin}>{item}</p>*/}
            {/*    })}*/}
            {/*</div>*/}
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
            <Button className={classes.btn} variant="contained" onClick={downloadImage}>Выбрать
                фото</Button>
            {/*<Button className={classes.btn} variant="contained" onClick={send}>Прикрепить фото</Button>*/}
            {Object.keys(props).length === 0 ?
              <Button onClick={sendForm} variant="contained" color="primary">Сохранить</Button> :
              <Button onClick={refreshNews} variant="contained" color="primary">Изменить</Button>
            }
            {msg.length === 0 ? null : <p className={styles.answer}>{msg}</p>}
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