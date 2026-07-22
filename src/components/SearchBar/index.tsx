import styles from "./styles.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search blog posts"
      />
      <button type="button" className={styles.searchButton} aria-label="Search">
        <img
          width={17}
          height={17}
          src="/icons/lupa.svg"
          alt="Search icon"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};
