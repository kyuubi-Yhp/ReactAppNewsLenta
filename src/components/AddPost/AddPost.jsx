

function AddPost() {
  return (
    <div>
      <h1>Новый пост</h1>
      <input
        type="text"
        name="title" 
        placeholder="Заголовок"/>
      <textarea
        name="text"
        placeholder="напишите пост"
      ></textarea>
      <button>добавить</button>
    </div>
  )
}

export default AddPost