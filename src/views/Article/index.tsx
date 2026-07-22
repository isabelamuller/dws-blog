import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPostById, getPosts } from "../../api/requests";
import type { IPostProps } from "../../api/types";

import { ArticleCard } from "../../components/ArticleCard";
import { BackButton } from "../../components/Back";
import { PageContainer } from "../../components/Container";
import { LoadingSkeleton } from "../../components/Skeleton";

import { formatDate } from "../../utils/formatDate";
import { getLatestPosts } from "../../utils/getLatestPosts";

import styles from "./styles.module.css";
import { formatSlug } from "../../utils/formatSlug";

export const ArticleView = () => {
  const { slug } = useParams();

  const [post, setPost] = useState<IPostProps>();
  const [latestPosts, setLatestPosts] = useState<IPostProps[]>([]);

  useEffect(() => {
    if (!slug) {
      return;
    }

    const fetchData = async () => {
      const postsData = await getPosts();

      const matchedPost = postsData.find(
        (post) => formatSlug(post.title) === slug,
      );

      if (!matchedPost) {
        return;
      }

      const postData = await getPostById(matchedPost.id);

      setPost(postData);
      setLatestPosts(getLatestPosts(postsData, matchedPost.id));
    };

    fetchData();
  }, [slug]);

  if (!post) {
    return <LoadingSkeleton />;
  }

  return (
    <main className={styles.page}>
      <PageContainer>
        <BackButton />
        <article className={styles.article}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.author}>
            <img
              className={styles.authorImage}
              src={post.author.profilePicture}
              alt={post.author.name}
            />
            <div className={styles.authorInfo}>
              <span>
                Written by: <strong>{post.author.name}</strong>
              </span>
              <span className={styles.date}>{formatDate(post.createdAt)}</span>
            </div>
          </div>
          <img
            className={styles.heroImage}
            src={post.thumbnail_url}
            alt={post.title}
          />
          <div className={styles.content}>
            <p>{post.content}</p>
          </div>
          <hr className={styles.divider} />
          <section className={styles.latestArticles}>
            <h2>Latest articles</h2>
            <div className={styles.cards}>
              {latestPosts.map((latestPost) => (
                <ArticleCard key={latestPost.id} data={latestPost} />
              ))}
            </div>
          </section>
        </article>
      </PageContainer>
    </main>
  );
};
