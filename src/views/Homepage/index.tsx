import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { getPosts } from "@/api/requests";
import type { IPostProps } from "@/api/types";
import { ArticleCard } from "@/components/ArticleCard";
import { PageContainer } from "@/components/Container";
import { Filters } from "@/components/Filters";
import { LoadingSkeleton } from "@/components/Skeleton";
import { useFiltersStore } from "@/store/useFiltersStore";
import { formatSlug } from "@/utils/formatSlug";
import { SortOrder, sortPosts } from "@/utils/sortPosts";
import styles from "./styles.module.css";
import { SortBy } from "@/components/SortBy";

export const HomepageView = () => {
  const [posts, setPosts] = useState<IPostProps[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Newest);

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
    const filtered = posts.filter((post) => {
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

    return sortPosts(filtered, sortOrder);
  }, [posts, appliedCategoryIds, appliedAuthorIds, sortOrder]);

  if (!posts.length) {
    return <LoadingSkeleton />;
  }

  return (
    <main className={styles.page}>
      <PageContainer>
        <div className={styles.heading}>
          <h1>DWS blog</h1>
        </div>
        <div className={styles.mobileControls}>
          <Filters />
          <div className={styles.mobileSort}>
            <SortBy value={sortOrder} onChange={setSortOrder} />
          </div>
        </div>
        <section className={styles.postsSection}>
          <div className={styles.desktopSort}>
            <SortBy value={sortOrder} onChange={setSortOrder} />
          </div>
          <div className={styles.postsGrid}>
            {!filteredPosts.length && (
              <span className={styles.notFound}>
                <img
                  src="/icons/not-found-icon.png"
                  alt="Not Found Icon"
                  width={80}
                  height={80}
                />
                No posts found. Try changing your filters.
              </span>
            )}
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/post/${formatSlug(post.title)}`}
                className={styles.cardLink}
                aria-label={`Read article: ${post.title}`}
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
