import { useState, useEffect } from 'react'
import { GetPostsApi, DeletPost } from './api/GetPostsApi'
import { GetNormalizePosts } from './utils/GetNormalizePosts'
import AddPost from './components/AddPost/AddPost'
import LentaPost from './components/LentaPost/LentaPost'
import LoadingFetch from './components/Loading/Loading'
import ErrorFetch from './components/Error/Error'
import './App.css'

function App() {
  const [postId, setPostId] = useState(null)
  const [postById, setPostById] = useState({})
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

  return (
    <div>
      <AddPost

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
