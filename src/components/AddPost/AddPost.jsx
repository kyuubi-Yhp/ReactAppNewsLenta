

function AddPost({ addPostBtn, handelValueImput, addPost }) {
  return (
    <div>
      <h1>Новый пост</h1>
      <input
        onChange={(event) => handelValueImput(event)}
        type="text"
        name="title"
        value={addPost ? addPost.title : '' }
        placeholder="Заголовок" />
      <textarea
        onChange={(event) => handelValueImput(event)}
        name="body"
        value={addPost?.body || ''}
        placeholder="напишите пост"
      ></textarea>
      <button
        onClick={addPostBtn}
      >добавить</button>
    </div>
  )
}

export default AddPost