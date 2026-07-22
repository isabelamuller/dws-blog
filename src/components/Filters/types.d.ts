import type { IAuthorProps, ICategoryProps } from "../../api/types";

export interface IFiltersProps {
  categories: ICategoryProps[];
  authors: IAuthorProps[];
  selectedCategoryIds: string[];
  selectedAuthorIds: string[];
  onToggleCategory: (id: string) => void;
  onToggleAuthor: (id: string) => void;
  onApplyFilters?: () => void;
}
