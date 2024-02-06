import "./globals.css";
import HomeBanner from "@/components/HomepageSlider";
import ServicesComponent from "@/components/ServicesComponent";
import OurServices from "@/components/OurServices";
import OurPortfolio from "@/components/OurPortfolio";
import DiscussProject from "@/components/DiscussProject";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div>
      {/* Header */}
      <HomeBanner />
      {/* Section para */}
      <h1 className="text-[40px] text-blue-900 font-semibold text-center mt-[80px] mb-5">
        Our Offerings for your Distinct Requirements!
      </h1>

      <ServicesComponent />
      <OurServices />
      <OurPortfolio />
      <DiscussProject />
     {/* Footer */}
     <div className="mt-10">
     <Footer/>
     </div>
    </div>
  );
}
