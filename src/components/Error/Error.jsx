

function ErrorFetch({ isError }) {
  return (
    <div>
      {isError && <p>Произашла ошибка загрузки данных</p>}
    </div>
  )
}

export default ErrorFetch