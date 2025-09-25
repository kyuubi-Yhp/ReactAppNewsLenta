import { useState, useEffect } from 'react'
import { GetPostsApi, DeletPost, UpdetePost } from './api/GetPostsApi'
import { GetNormalizePosts } from './utils/GetNormalizePosts'
import AddPost from './components/AddPost/AddPost'
import LentaPost from './components/LentaPost/LentaPost'
import LoadingFetch from './components/Loading/Loading'
import ErrorFetch from './components/Error/Error'
import './App.css'

function App() {
  const [postId, setPostId] = useState(null)
  const [postById, setPostById] = useState({})
  const [addPost, setAddPost] = useState({
    title: "",
    body: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    GetPostsApi()
      .then(post => {
        setIsLoading(false)
        const [ids, byIds] = GetNormalizePosts(post)
        setPostId(ids)
        setPostById(byIds)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      });
  }, [])

  function deletePostBtn(id) {
    setPostId(postId.filter(postId => postId !== id))
    DeletPost(id)
  }

  function handelValueImput(event) {
    const { name, value } = event.target
    setAddPost({ ...addPost, [name]: value })
    console.log(addPost)
  }

  function addPostBtn() {
    const newId = crypto.randomUUID()
    const newPost = { ...addPost, id: newId }

    setPostById({ ...postById, [newId]: newPost })
    setPostId([newId, ...postId])

    UpdetePost(newPost)
    setAddPost({
      title: "",
      body: ""
    })
  }

  return (
    <div>
      <AddPost
        addPost={addPost}
        handelValueImput={handelValueImput}
        addPostBtn={addPostBtn}
      />

      <LentaPost
        deletePostBtn={deletePostBtn}
        postId={postId}
        postById={postById}
      />
      <LoadingFetch
        isLoading={isLoading}
      />
      <ErrorFetch
        isError={isError}
      />
    </div>
  )
}

export default App
