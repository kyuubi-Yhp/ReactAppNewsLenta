const BASE_URL = 'https://jsonplaceholder.typicode.com/users/1'

export function GetPostsApi() {
  return fetch(`${BASE_URL}/posts`)
  .then(response => {
    if (!response.ok) {
      throw new Error('произошла ошибка запроса')
    }
    return response.json()
  })
}