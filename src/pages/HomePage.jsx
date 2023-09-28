import Header from "../Header";
import HeroSection from "../HeroSection";
import CategoryCard from "../CategoryCard";
import AboutUsSection from "../AboutUsSection";
import Footer from "../Footer";
import BlogSlider from "../BlogSlider";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CategoryCard />
      {/* <BlogSlider /> */}
      <AboutUsSection />
      <Footer />
    </>
  );
};

export default HomePage;
