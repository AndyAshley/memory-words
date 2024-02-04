import styles from "./PageWrapper.module.css";

const PageWrapper = (props) => {
  return <main className={styles["wrapper-style"]}>{props.children}</main>;
};

export default PageWrapper;
