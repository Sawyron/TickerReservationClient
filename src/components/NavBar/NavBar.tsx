import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar: FC = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.router}>
        <li className={classes.router}>
          <NavLink className={classes.router} to="/">
            Trains
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.router} to="login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.router} to="reserve">
            Reserve
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.router} to="my-tickets">
            My tickets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
