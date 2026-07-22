import { create } from "zustand";

interface IFiltersStore {
  selectedCategoryIds: string[];
  selectedAuthorIds: string[];
  appliedCategoryIds: string[];
  appliedAuthorIds: string[];
  toggleCategory: (id: string) => void;
  toggleAuthor: (id: string) => void;
  applyFilters: () => void;
}

export const useFiltersStore = create<IFiltersStore>((set) => ({
  selectedCategoryIds: [],
  selectedAuthorIds: [],
  appliedCategoryIds: [],
  appliedAuthorIds: [],
  toggleCategory: (id) =>
    set((state) => ({
      selectedCategoryIds: state.selectedCategoryIds.includes(id)
        ? state.selectedCategoryIds.filter((categoryId) => categoryId !== id)
        : [...state.selectedCategoryIds, id],
    })),
  toggleAuthor: (id) =>
    set((state) => ({
      selectedAuthorIds: state.selectedAuthorIds.includes(id)
        ? state.selectedAuthorIds.filter((authorId) => authorId !== id)
        : [...state.selectedAuthorIds, id],
    })),
  applyFilters: () =>
    set((state) => ({
      appliedCategoryIds: [...state.selectedCategoryIds],
      appliedAuthorIds: [...state.selectedAuthorIds],
    })),
}));
