import MainSection from './components/MainSection';
import MenuSection from './components/MenuSection';
import InfoSection from './components/InfoSection';
import CustomerReviewSection from './components/CustomerReviewSection';
import HighlightedMenuSection from './components/HighlightedMenuSection';

const HomePage = () => {
  return (
    <main className="mb-5 flex flex-col gap-10">
      <MainSection />
      <InfoSection />
      <div className="flex flex-col mx-10 gap-5">
        <MenuSection />
        <CustomerReviewSection />
        <HighlightedMenuSection />
      </div>
    </main>
  );
};

export default HomePage;
