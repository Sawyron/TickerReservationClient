import { FC, useState } from 'react';
import AuthService from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import classes from './LoginForm.module.css';

const LoginForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isLoggedIn());
  const navigate = useNavigate();

  const handleLogin = () => {
    AuthService.login(username, password);
    navigate('/');
  };
  const handleLogout = () => {
    AuthService.logout();
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes['login-form']}>
        {!isLoggedIn && (
          <>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="text"
              placeholder="username"
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <button onClick={handleLogin}>Вход</button>
          </>
        )}
        <button onClick={handleLogout}>Выход</button>
      </div>
    </div>
  );
};

export default LoginForm;
