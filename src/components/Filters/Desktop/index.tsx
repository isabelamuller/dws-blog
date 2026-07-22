import { getAuthorLastName } from "@/utils/getAuthorLastName";
import type { IFiltersProps } from "../types";

import styles from "./styles.module.css";

export const FiltersDesktop = ({
  categories,
  authors,
  selectedCategoryIds,
  selectedAuthorIds,
  onToggleCategory,
  onToggleAuthor,
  onApplyFilters,
}: IFiltersProps) => {
  return (
    <aside className={styles.filters}>
      <span className={styles.title}>
        <img
          src="/icons/filters-icon.svg"
          alt="Filters icon"
          width={17}
          height={17}
        />
        Filters
      </span>
      <div className={styles.filterGroup}>
        <h3>Category</h3>
        {categories.map((category) => {
          const isSelected = selectedCategoryIds.includes(category.id);
          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={isSelected}
              className={isSelected ? styles.selected : ""}
              onClick={() => onToggleCategory(category.id)}
            >
              {category.name}
            </button>
          );
        })}
      </div>
      <div className={styles.filterGroup}>
        <h3>Author</h3>
        {authors.map((author) => {
          const isSelected = selectedAuthorIds.includes(author.id);
          return (
            <button
              key={author.id}
              type="button"
              aria-pressed={isSelected}
              className={isSelected ? styles.selected : ""}
              onClick={() => onToggleAuthor(author.id)}
            >
              {getAuthorLastName(author.name)}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className={styles.applyButton}
        onClick={onApplyFilters}
      >
        Apply filters
      </button>
    </aside>
  );
};
