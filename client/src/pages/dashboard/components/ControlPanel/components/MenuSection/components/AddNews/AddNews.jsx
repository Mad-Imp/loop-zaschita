import styles from './AddNews.module.scss'
import {useState} from 'react';
import axios from 'axios';

function AddNews() {

  const [file, setFile] = useState('')
  const [images, setImages] = useState([])

  const imageHandler = (e) => {
    setFile(e.target.files[0])
  }

  const send = (e) => {
    const data = new FormData();
    data.append("file", file)
    let img = ''
    axios.post("/upload", data)
      .then(res => {
        img = images.push(res.data.file)
      })
      .catch(err => console.log(err))
    setImages(images.push(img))
    console.log(images)
  }

  return (
    <div className={styles.wrap}>
      <form action='#'>
        <input onChange={imageHandler} name='myImage' type="file"/>
      </form>
      <button onClick={send}>Отправить</button>

    </div>
  )
}

export {AddNews}