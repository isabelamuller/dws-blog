import styles from "./styles.module.css";

export const LoadingSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.skeleton} ${styles.title}`} />
      <div className={`${styles.skeleton} ${styles.text}`} />
      <div className={`${styles.skeleton} ${styles.text}`} />
      <div className={`${styles.skeleton} ${styles.textShort}`} />
      <div className={`${styles.skeleton} ${styles.textShort}`} />
      <div className={`${styles.skeleton} ${styles.textShort}`} />
      <div className={`${styles.skeleton} ${styles.text}`} />
      <div className={`${styles.skeleton} ${styles.text}`} />
    </div>
  );
};
