import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { setAuthToken } from '../util/auth';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const data = await request.formData();
  const mode = searchParams.get('mode') || 'login';

  if (['signup', 'login'].includes(mode) === false) {
    throw json({ message: 'unsupported mode' }, { status: 422 });
  }

  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  });

  if ([422, 401].includes(response.status) === true) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not authenticate user' }, { status: 500 })
  }

  const resData = await response.json();
  const token = resData.token;

  setAuthToken(token);

  return redirect('/');
};