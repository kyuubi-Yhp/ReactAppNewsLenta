import './LentaPost.css'


function LentaPost({
  postId,
  postById,
  deletePostBtn
}) {
  return (
    <div className='lenta__container'>
      <h1 className='lenta__title'>лента</h1>
      <div className='lenta__post'>
        {postId && postId.map(id => (
          <div
            className='lenta__box-item'
            key={id}>
            <h2 className='lenta__title-item'>{postById[id].title}</h2>
            <p className='text'>{postById[id].body}</p>
          <div
          className="cross__btn-box">
              <div
                onClick={() => deletePostBtn(id)}
                className="cross__btn"
              >✘</div>
          </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default LentaPost