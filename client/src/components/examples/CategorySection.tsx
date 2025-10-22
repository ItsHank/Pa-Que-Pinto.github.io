import CategorySection from '../CategorySection';

export default function CategorySectionExample() {
  return (
    <CategorySection 
      onCategorySelect={(category) => console.log('Selected category:', category)}
    />
  );
}
