const BASE_URL = 'https://jsonplaceholder.typicode.com'

export function GetPostsApi() {
  return fetch(`${BASE_URL}/posts`)
    .then(response => {
      if (!response.ok) {
        throw new Error('произошла ошибка запроса')
      }
      return response.json()
    })
}

export function UpdetePost(post) {
  fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title: post.title,
      body: post.body,
      userId: 1,
    }),
  })
}

export function DeletPost(id) {
  fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  });
}

