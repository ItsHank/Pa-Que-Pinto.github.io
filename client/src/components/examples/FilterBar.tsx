import { useState } from 'react';
import FilterBar from '../FilterBar';

export default function FilterBarExample() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<any>("ALL");
  const [selectedPriceRange, setSelectedPriceRange] = useState<any>("ALL");
  const [sortBy, setSortBy] = useState<any>("price-asc");

  return (
    <FilterBar
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      selectedPriceRange={selectedPriceRange}
      onPriceRangeChange={setSelectedPriceRange}
      sortBy={sortBy}
      onSortChange={setSortBy}
      onClearFilters={() => {
        setSearchQuery("");
        setSelectedCategory("ALL");
        setSelectedPriceRange("ALL");
      }}
    />
  );
}
