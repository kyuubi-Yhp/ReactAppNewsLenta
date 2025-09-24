

function LentaPost({
  postId,
  postById
}) {
  return (
    <div>
      <h1>лента</h1>

      <div>
        {postId && postId.map(id => (
          <div key={id}>
            <h2>{postById[id].title}</h2>
            <p>{postById[id].body}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default LentaPost