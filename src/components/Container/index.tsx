import styles from "./styles.module.css";
import type { IPageContainerProps } from "./types";

export const PageContainer = ({ children }: IPageContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
