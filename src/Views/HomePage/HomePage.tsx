import MainSection from './components/MainSection';
import MenuSection from './components/MenuSection';
import InfoSection from './components/InfoSection';
import CustomerReviewSection from './components/CustomerReviewSection';

const HomePage = () => {
  return (
    <main className="mb-5 flex flex-col gap-10">
      <MainSection />
      <InfoSection />
      <MenuSection />
      <CustomerReviewSection />
    </main>
  );
};

export default HomePage;
