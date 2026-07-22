import { useEffect, useState } from "react";

import { getAuthors, getCategories } from "@/api/requests";
import type { IAuthorProps, ICategoryProps } from "@/api/types";
import { useFiltersStore } from "@/store/useFiltersStore";

import { FiltersDesktop } from "./Desktop";
import { FiltersMobile } from "./Mobile";

export const Filters = () => {
  const [categories, setCategories] = useState<ICategoryProps[]>([]);
  const [authors, setAuthors] = useState<IAuthorProps[]>([]);

  const selectedCategoryIds = useFiltersStore(
    (store) => store.selectedCategoryIds,
  );
  const selectedAuthorIds = useFiltersStore((store) => store.selectedAuthorIds);
  const toggleCategory = useFiltersStore((store) => store.toggleCategory);
  const toggleAuthor = useFiltersStore((store) => store.toggleAuthor);
  const applyFilters = useFiltersStore((store) => store.applyFilters); // desenvolver dps

  useEffect(() => {
    const fetchFilters = async () => {
      const [categoriesData, authorsData] = await Promise.all([
        getCategories(),
        getAuthors(),
      ]);
      setCategories(categoriesData);
      setAuthors(authorsData);
    };
    fetchFilters();
  }, []);

  return (
    <>
      <FiltersMobile
        categories={categories}
        authors={authors}
        selectedAuthorIds={selectedAuthorIds}
        selectedCategoryIds={selectedCategoryIds}
        onToggleCategory={toggleCategory}
        onToggleAuthor={toggleAuthor}
      />
      <FiltersDesktop
        categories={categories}
        authors={authors}
        selectedAuthorIds={selectedAuthorIds}
        selectedCategoryIds={selectedCategoryIds}
        onToggleCategory={toggleCategory}
        onToggleAuthor={toggleAuthor}
        onApplyFilters={applyFilters}
      />
    </>
  );
};
