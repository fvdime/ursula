import AboutUs from "@/components/AboutUs";
import Categories from "@/components/Categories";
import FeaturedGigs from "@/components/FeaturedGigs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <Jumbotron /> */}
      {/* <FeaturedGigs data={data}/> */}
      <AboutUs />
      <Categories />
      <Footer />
    </>
  );
}
