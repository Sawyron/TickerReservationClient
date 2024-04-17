import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Trains</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <NavLink to="reserve">Reserve</NavLink>
        </li>
        <li>
          <NavLink to="my-tickets">My tickets</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
