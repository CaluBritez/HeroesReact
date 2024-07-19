import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

export const Login = () => {

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = () => {
    
    
    login("Calubich");
    
    navigate('/', {
      replace: true
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />

      <button 
      className="btn btn-primary"
      onClick={onLogin}
      >Login</button>
    </div>
  )
}
