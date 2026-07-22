import { useState } from "react";

import { getLastName } from "@/utils/getAuthorLastName";
import type { IFiltersProps } from "../types";

import styles from "./styles.module.css";

enum ActiveFilter {
  CategoryFilter = "category",
  AuthorFilter = "author",
  None = "none",
}

export const FiltersMobile = ({
  categories,
  authors,
  selectedCategoryIds,
  selectedAuthorIds,
  onToggleCategory,
  onToggleAuthor,
}: IFiltersProps) => {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>(
    ActiveFilter.None,
  );

  const toggleFilter = (filter: ActiveFilter) => {
    setActiveFilter((current) =>
      current === filter ? ActiveFilter.None : filter,
    );
  };

  const isCategoryOpen = activeFilter === "category";
  const isAuthorOpen = activeFilter === "author";
  const isOpen = activeFilter !== null;

  return (
    <div className={styles.filters}>
      <div className={styles.filtersRow}>
        <div className={styles.filter}>
          <button
            type="button"
            className={styles.trigger}
            aria-expanded={isCategoryOpen}
            aria-controls="category-filter-options"
            onClick={() => toggleFilter(ActiveFilter.CategoryFilter)}
          >
            <span>Category</span>
            <img
              src="/icons/chevron.svg"
              alt=""
              aria-hidden="true"
              width={15}
              height={15}
            />
          </button>
        </div>
        <div className={styles.filter}>
          <button
            type="button"
            className={styles.trigger}
            aria-expanded={isAuthorOpen}
            aria-controls="author-filter-options"
            onClick={() => toggleFilter(ActiveFilter.AuthorFilter)}
          >
            <span>Author</span>
            <img
              src="/icons/chevron.svg"
              alt=""
              aria-hidden="true"
              width={15}
              height={15}
            />
          </button>
        </div>
      </div>
      <div
        className={`${styles.dropdownWrapper} ${
          isOpen ? styles.dropdownWrapperOpen : ""
        }`}
      >
        <div className={styles.dropdownInner}>
          <div className={styles.dropdown}>
            {isCategoryOpen &&
              categories.map((category) => {
                const isSelected = selectedCategoryIds.includes(category.id);
                return (
                  <button
                    key={category.id}
                    id="category-filter-options"
                    type="button"
                    aria-pressed={isSelected}
                    className={isSelected ? styles.selected : ""}
                    onClick={() => onToggleCategory(category.id)}
                  >
                    {category.name}
                  </button>
                );
              })}
            {isAuthorOpen &&
              authors.map((author) => {
                const isSelected = selectedAuthorIds.includes(author.id);
                return (
                  <button
                    key={author.id}
                    id="author-filter-options"
                    type="button"
                    aria-pressed={isSelected}
                    className={isSelected ? styles.selected : ""}
                    onClick={() => onToggleAuthor(author.id)}
                  >
                    {getLastName(author.name)}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
