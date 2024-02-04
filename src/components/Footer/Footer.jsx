import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles["footer-wrapper"]}>
      <p>
        Copyright &copy; {year} <span className={styles.slash}>//</span>{" "}
        <a href="https://www.andyashley.dev" target="_blank">
          Andy Ashley
        </a>{" "}
        <span className={styles.slash}>//</span> Made with{" "}
        <span className={styles.heart}>❤️</span> in{" "}
        <a href="https://react.dev/" target="_blank">
          React
        </a>
      </p>
    </footer>
  );
};

export default Footer;
