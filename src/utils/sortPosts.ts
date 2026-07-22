import type { IPostProps } from "@/api/types";

export enum SortOrder {
  Newest = "newest",
  Oldest = "oldest",
}

export const sortPostsByNewest = (posts: IPostProps[]): IPostProps[] => {
  return [...posts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
};

export const sortPostsByOldest = (posts: IPostProps[]): IPostProps[] => {
  return [...posts].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
  );
};

export const sortPosts = (
  posts: IPostProps[],
  order: SortOrder,
): IPostProps[] => {
  return order === SortOrder.Newest
    ? sortPostsByNewest(posts)
    : sortPostsByOldest(posts);
};
