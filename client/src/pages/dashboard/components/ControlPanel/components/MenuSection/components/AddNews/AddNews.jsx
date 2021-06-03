import styles from './AddNews.module.scss'
import {useEffect, useState} from 'react';
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
        return img = res.data.file
      })
      .then(data => {
        let imgs = [...images]
        imgs.push(data)
        setImages(imgs)
      })
      .catch(err => console.log(err))


  }

  useEffect(() => {
    console.log(images)
  })

  return (
    <div className={styles.wrap}>
      <form action='#'>
        <input onChange={imageHandler} name='myImage' type="file"/>
      </form>
      <button onClick={send}>Отправить</button>
      {images.map((img, index) => {
        return <img src={img} key={index} alt='image'/>
      })}
    </div>
  )
}

export {AddNews}