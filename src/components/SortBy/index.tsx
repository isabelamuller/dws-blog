import { SortOrder } from "@/utils/sortPosts";

import styles from "./styles.module.css";
import type { ISortByProps } from "./types";

export const SortBy = ({ value, onChange }: ISortByProps) => {
  const isNewest = value === SortOrder.Newest;

  const handleSortChange = () => {
    onChange(isNewest ? SortOrder.Oldest : SortOrder.Newest);
  };

  return (
    <div className={styles.sort}>
      <strong>Sort by:</strong>
      <button
        type="button"
        className={styles.sortFilter}
        onClick={handleSortChange}
      >
        <span className={styles.option}>
          {isNewest ? "Newest first" : "Oldest first"}
        </span>
        <img
          src="/icons/swap-icon.svg"
          alt=""
          aria-hidden="true"
          width={12}
          height={15}
        />
      </button>
    </div>
  );
};
