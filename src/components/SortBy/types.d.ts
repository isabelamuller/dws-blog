import type { SortOrder } from "@/utils/sortPosts";

export interface ISortByProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}
