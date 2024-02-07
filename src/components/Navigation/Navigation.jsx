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
          className={({ isActive }) =>
            [styles["nav-link"], isActive ? styles["active"] : ""].join(" ")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/math"
          className={({ isActive }) =>
            [styles["nav-link"], isActive ? styles["active"] : ""].join(" ")
          }
        >
          Math
        </NavLink>
        <NavLink
          to="/words"
          className={({ isActive }) =>
            [styles["nav-link"], isActive ? styles["active"] : ""].join(" ")
          }
        >
          Words
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
