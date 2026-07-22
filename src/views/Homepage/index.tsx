import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { getPosts } from "../../api/requests";
import type { IPostProps } from "../../api/types";
import { ArticleCard } from "../../components/ArticleCard";
import { PageContainer } from "../../components/Container";
import { Filters } from "../../components/Filters";

import styles from "./styles.module.css";
import { useFiltersStore } from "../../store/useFiltersStore";

export const HomepageView = () => {
  const [posts, setPosts] = useState<IPostProps[]>([]);

  const appliedCategoryIds = useFiltersStore(
    (store) => store.appliedCategoryIds,
  );
  const appliedAuthorIds = useFiltersStore((store) => store.appliedAuthorIds);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        appliedCategoryIds.length === 0 ||
        post.categories.some((category) =>
          appliedCategoryIds.includes(category.id),
        );
      const matchesAuthor =
        appliedAuthorIds.length === 0 ||
        appliedAuthorIds.includes(post.author.id);

      return matchesCategory && matchesAuthor;
    });
  }, [posts, appliedCategoryIds, appliedAuthorIds]);

  if (!posts.length) {
    return null;
  }

  return (
    <main className={styles.page}>
      <PageContainer>
        <div className={styles.heading}>
          <h1>DWS blog</h1>
        </div>
        <Filters />
        <section className={styles.postsSection}>
          <div className={styles.sort}>
            <strong>Sort by:</strong>
            <button>Newest first ↕</button>
          </div>
          <div className={styles.postsGrid}>
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/posts/${post.id}`}
                className={styles.cardLink}
              >
                <ArticleCard data={post} />
              </Link>
            ))}
          </div>
        </section>
      </PageContainer>
    </main>
  );
};
