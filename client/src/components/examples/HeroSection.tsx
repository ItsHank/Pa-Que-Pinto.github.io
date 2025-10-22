import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection 
      onExploreClick={() => console.log('Explore clicked')}
    />
  );
}
