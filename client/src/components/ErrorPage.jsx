import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();


  return (
    <header className="error-page">
      Sorry, we seem to have missplace that resource!
      Error: {error}
    </header>
  )
}

export default ErrorPage;