import style from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={style.header}>
      <h1 className={style.brand}>
        Alexandre <span>Blog</span>
      </h1>
    </div>
  );
};

export default Navbar;
