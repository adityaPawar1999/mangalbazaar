
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import WeddingCategories from "@/components/WeddingCategories";
import WeddingVendorCategories from "@/components/WeddingVendorCategories";
import WeddingVenues from "@/components/WeddingVenues";
import Testimonials from "@/components/testimonials";



const HeaderSection = () => {
  return (
    <>
    <Navbar />
    <Header/>
    <WeddingCategories/>

    <WeddingVenues/>
    <WeddingVendorCategories/>
    <br/><br/>
    <Gallery/>
    <br/><br/>
    <Testimonials/>
    <br/><br/><br/>
    <Footer/>
    
    </>
    
  );
};

export default HeaderSection;
