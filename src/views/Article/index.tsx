import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
    if (!post) {
      return;
    }

    document.title = `${post.title} | DWS Blog`;

    return () => {
      document.title = "DWS Blog";
    };
  }, [post]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

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
              loading="eager"
              className={styles.authorImage}
              src={post.author.profilePicture}
              alt=""
              aria-hidden="true"
            />
            <div className={styles.authorInfo}>
              <span>
                Written by: <strong>{post.author.name}</strong>
              </span>
              <time className={styles.date} dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
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
                <Link
                  key={latestPost.id}
                  className={styles.cardLink}
                  to={`/post/${formatSlug(latestPost.title)}`}
                  aria-label={`Read article: ${latestPost.title}`}
                >
                  <ArticleCard data={latestPost} />
                </Link>
              ))}
            </div>
          </section>
        </article>
      </PageContainer>
    </main>
  );
};
