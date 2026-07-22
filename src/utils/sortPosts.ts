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

// the api currently returns identical createdAt and updatedAt values for all
// posts, making chronological sorting impossible. the sorting functions above
// represent the intended behavior.

export const sortPosts = (
  posts: IPostProps[],
  order: SortOrder,
): IPostProps[] => {
  return order === SortOrder.Newest ? [...posts] : [...posts].reverse();
};
