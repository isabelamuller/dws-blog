import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const TopPage = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    !!isScrolling && (
      <div
        className={styles.wrapper}
        onClick={handleScrollToTop}
        aria-label="Back to top"
      >
        <img
          className={styles.topIcon}
          src="/icons/back-icon.svg"
          alt=""
          width={15}
          height={15}
        />
      </div>
    )
  );
};
