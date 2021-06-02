import styles from './AddNews.module.scss'

function AddNews() {

  const upload = (e) => {
    e.target.preventDefault()
    const file = e.target.files[0]
    fetch('/upload', {
      method: 'POST',
      body: file
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className={styles.wrap}>
      <form action='/upload' method='POST' encType='multipart/form-data'>
        <input name='myImage' type="file"/>
        <button type='submit'>Отправить</button>
      </form>
    </div>
  )
}

export {AddNews}