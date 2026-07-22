import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <aside className={styles.backArea}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <img src="/icons/back-icon.svg" width={15} height={15} />
        Back
      </button>
    </aside>
  );
};
