import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { getCategories } from "@/api/requests";
import type { ICategoryProps } from "@/api/types";

import styles from "./styles.module.css";

export const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [showSearchError, setShowSearchError] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategoryProps[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="search"
          placeholder="Search"
          aria-label="Search blog posts"
          onChange={() => setShowSearchError(true)}
        />
        <button
          type="button"
          className={styles.searchButton}
          aria-label="Search"
          onClick={() => setIsSearchOpen(true)}
        >
          <img
            width={17}
            height={17}
            src="/icons/lupa.svg"
            alt="Search icon"
            aria-hidden="true"
          />
        </button>
        {showSearchError && (
          <span className={styles.searchBarError}>
            This is not a functional search bar. Sorry!
          </span>
        )}
      </div>
      {createPortal(
        <div
          className={`${styles.mobileSearchOverlay} ${
            isSearchOpen ? styles.mobileSearchOverlayOpen : ""
          }`}
          aria-hidden={!isSearchOpen}
        >
          <aside className={styles.mobileSearch}>
            <div className={styles.mobileSearchInput}>
              <button
                type="button"
                className={styles.backButton}
                aria-label="Close search"
                onClick={() => setIsSearchOpen(false)}
              >
                <span className={styles.chevronBack} aria-hidden="true" />
              </button>
              <input type="search" aria-label="Search blog posts" />
              <button
                type="button"
                className={styles.clearButton}
                aria-label="Clear search"
              >
                ×
              </button>
            </div>
            <div className={styles.searchResults}>
              {categories.map((category) => (
                <span key={category.id}>{category.name}</span>
              ))}
            </div>
          </aside>
        </div>,
        document.body,
      )}
    </>
  );
};
