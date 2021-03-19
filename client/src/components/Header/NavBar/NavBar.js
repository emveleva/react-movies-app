import style from './NavBar.module.css'

function NavBar(props) {
    return (
      <li>
          <span className={style.navListItem}>{props.children}</span> 
      </li>

    );
  }


export default NavBar