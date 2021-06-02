import styles from './AddNews.module.scss'

function AddNews() {

  const upload = (e) => {
    const file = e.target.files[0]
    fetch('/saveImage', {
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
      <h1 contentEditable>Hello</h1>
      <p contentEditable>dflskdjflsjdlfsjldfk</p>
      <input name='myimage' onChange={upload} type="file"/>
    </div>
  )
}

export {AddNews}