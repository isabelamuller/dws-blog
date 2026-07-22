import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPostById, getPosts } from "../../api/requests";
import type { IPostProps } from "../../api/types";

import { BackButton } from "../../components/Back";
import { formatDate } from "../../utils/formatDate";
import { getLatestPosts } from "../../utils/getLatestPosts";

import styles from "./styles.module.css";
import { ArticleCard } from "../../components/ArticleCard";
import { PageContainer } from "../../components/Container";

export const ArticleView = () => {
  const { id } = useParams();

  const [post, setPost] = useState<IPostProps>();
  const [latestPosts, setLatestPosts] = useState<IPostProps[]>([]);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchData = async () => {
      const [postData, postsData] = await Promise.all([
        getPostById(id),
        getPosts(),
      ]);

      setPost(postData);
      setLatestPosts(getLatestPosts(postsData, id));
    };

    fetchData();
  }, [id]);

  if (!post) {
    return;
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
              <span>{formatDate(post.createdAt)}</span>
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
                <ArticleCard data={latestPost} />
              ))}
            </div>
          </section>
        </article>
      </PageContainer>
    </main>
  );
};
