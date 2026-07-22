import type { IPostProps } from "../api/types";

export const getLatestPosts = (
  posts: IPostProps[],
  currentPostId: string,
  limit = 3,
): IPostProps[] => {
  return [...posts]
    .filter((post) => post.id !== currentPostId)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, limit);
};
