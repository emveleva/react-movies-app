import style from './NavBar.module.css'

function NavBar(props) {
    return (
      <li className="listItem">
          <span className={style.navListItem}>{props.children}</span> 
  </li>

    );
  }


export default NavBar