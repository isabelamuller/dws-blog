import type { IPostProps } from "@/api/types";

export interface IArticleCardProps {
  data: IPostProps;
  isLatestArticle?: boolean;
}
