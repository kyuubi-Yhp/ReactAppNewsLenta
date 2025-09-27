import './AddPost.css'

function AddPost({ addPostBtn, handelValueImput, addPost }) {
  return (
    <div className="setion__add-post">
      <h1 className='add__post-title'>Новый пост</h1>
      <input
        className='add__post-input'
        onChange={(event) => handelValueImput(event)}
        type="text"
        name="title"
        value={addPost ? addPost.title : ''}
        placeholder="Заголовок" />
      <textarea
        className='add__post-textarea'
        onChange={(event) => handelValueImput(event)}
        name="body"
        value={addPost?.body || ''}
        placeholder="напишите пост"
      ></textarea>
      <button
        className='add__post-button'
        onClick={addPostBtn}
      >добавить</button>
    </div>
  )
}

export default AddPost