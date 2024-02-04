import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import MindMap from "../../assets/icon.png";

const Navigation = () => {
  return (
    <nav className={styles["nav-bar"]}>
      <img src={MindMap} alt="Mind Map Icon" />
      <div className={styles.navlink}>
        <NavLink
          to="/"
          className={styles["nav-link"]}
          activeClassName={styles["active"]}
        >
          Home
        </NavLink>
        <NavLink
          to="/math"
          className={styles["nav-link"]}
          activeClassName={styles["active"]}
        >
          Math
        </NavLink>
        <NavLink
          to="/words"
          className={styles["nav-link"]}
          activeClassName={styles["active"]}
        >
          Words
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
