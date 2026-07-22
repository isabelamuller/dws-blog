import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <aside className={styles.backArea}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Back
      </button>
    </aside>
  );
};
