import { useEffect, useState } from "react";

import { getAuthors, getCategories } from "../../api/requests";
import type { IAuthorProps, ICategoryProps } from "../../api/types";

import styles from "./styles.module.css";
import { useFiltersStore } from "../../store/useFiltersStore";

export const Filters = () => {
  const [categories, setCategories] = useState<ICategoryProps[]>([]);
  const [authors, setAuthors] = useState<IAuthorProps[]>([]);

  const selectedCategoryIds = useFiltersStore(
    (store) => store.selectedCategoryIds,
  );
  const selectedAuthorIds = useFiltersStore((store) => store.selectedAuthorIds);
  const toggleCategory = useFiltersStore((store) => store.toggleCategory);
  const toggleAuthor = useFiltersStore((store) => store.toggleAuthor);
  const applyFilters = useFiltersStore((store) => store.applyFilters);

  useEffect(() => {
    const fetchFilters = async () => {
      const [categoriesData, authorsData] = await Promise.all([
        getCategories(),
        getAuthors(),
      ]);

      setCategories(categoriesData);
      setAuthors(authorsData);
    };

    fetchFilters();
  }, []);

  return (
    <aside className={styles.filters}>
      <h2 className={styles.title}>☷ Filters</h2>
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
              onClick={() => toggleCategory(category.id)}
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
              onClick={() => toggleAuthor(author.id)}
            >
              {author.name}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className={styles.applyButton}
        onClick={applyFilters}
      >
        Apply filters
      </button>
    </aside>
  );
};
