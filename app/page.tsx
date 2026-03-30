import DailyBestSells from "./components/shared/DailyBestSell";
import DealsOfTheDay from "./components/shared/DealOfTheDay";
import FeaturedCategories from "./components/shared/FeaturedCategory";
import Footer from "./components/shared/Footer";
import HeroSection from "./components/shared/HeroSection";
import Navbar from "./components/shared/Navbar";
import Navbar2 from "./components/shared/Navbar2";
import NewsLetterSection from "./components/shared/NewsLetter";
import PopularProducts from "./components/shared/PopularProduct";
import PromoBannerSection from "./components/shared/PromoBanner";
import SellingCategoryProducts from "./components/shared/SellingCategory";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <HeroSection />
      <FeaturedCategories />
      <PromoBannerSection />
      <PopularProducts />
      <DailyBestSells />
      <DealsOfTheDay />
      <SellingCategoryProducts />
      <NewsLetterSection />
      <Footer />
    </div>
  );
}
