import styles from "./styles.module.css";

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>
        <img width={200} src="/icons/dentsu-logo.svg" alt="" />
      </a>
      <div>search bar</div>
    </nav>
  );
};
