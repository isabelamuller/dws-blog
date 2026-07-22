import styles from "./styles.module.css";
import { formatDate } from "../../utils/formatDate";
import { getLastName } from "../../utils/getAuthorLastName";
import type { IArticleCardProps } from "./types";

export const ArticleCard = ({ data }: IArticleCardProps) => {
  const { title, author, createdAt, categories, thumbnail_url, content } = data;

  return (
    <div className={styles.card}>
      <img
        loading="eager"
        src={thumbnail_url}
        alt=""
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.topContent}>
          <span className={styles.date}>{formatDate(createdAt)}</span>{" "}
          <span className={styles.dot}>•</span>
          <span>{getLastName(author.name)}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.description}>{content}</span>
        <div className={styles.categories}>
          {categories.map((category) => (
            <span className={styles.category}>{category.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
