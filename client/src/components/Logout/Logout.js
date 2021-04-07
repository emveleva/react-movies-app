import style from "./Logout.module.css";
import { Component } from "react";

class Logout extends Component {
  render() {
    return (
      <main>
        <div className={style.logout}>
          <img src="/img/logout.png" alt="" srcSet="" />
          <h1>Thank you for visiting our website!</h1>
        </div>
      </main>
    );
  }
}

export default Logout;
