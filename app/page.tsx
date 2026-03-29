import FeaturedCategories from "./components/shared/FeaturedCategory";
import HeroSection from "./components/shared/HeroSection";
import Navbar from "./components/shared/Navbar";
import Navbar2 from "./components/shared/Navbar2";
import PromoBannerSection from "./components/shared/PromoBanner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <HeroSection />
      <FeaturedCategories />
      <PromoBannerSection />
    </div>
  );
}
