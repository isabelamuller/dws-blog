import { create } from "zustand";

export type FiltersStoreState = {
  selectedCategoryIds: string[];
  selectedAuthorIds: string[];
  appliedCategoryIds: string[];
  appliedAuthorIds: string[];
};

type FiltersStoreActions = {
  toggleCategory: (id: string) => void;
  toggleAuthor: (id: string) => void;
  applyFilters: () => void;
};

type FiltersStore = FiltersStoreState & FiltersStoreActions;

const filtersInitialState: FiltersStoreState = {
  selectedCategoryIds: [],
  selectedAuthorIds: [],
  appliedCategoryIds: [],
  appliedAuthorIds: [],
};

export const useFiltersStore = create<FiltersStore>((set) => ({
  ...filtersInitialState,

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
