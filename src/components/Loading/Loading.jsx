

function LoadingFetch({ isLoading }) {
  return (
    <div>
      {isLoading && <p>Загрузка данных с сервера</p>}
    </div>
  )
}

export default LoadingFetch