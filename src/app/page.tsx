import "./globals.css";
import HomeBanner from "@/components/HomeBanner";
import ServicesComponent from "@/components/ServicesComponent";
import OurServices from "@/components/OurServices";
import OurPortfolio from "@/components/OurPortfolio";
import DiscussProject from "@/components/DiscussProject";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      {/* Header */}
      <HomeBanner />
      {/* Section para */}
      <h1 className="text-[40px] text-center my-[80px]">
        Our Offerings for your Distinct Requirements!
      </h1>

      <ServicesComponent/>
      <OurServices/>
      <OurPortfolio/>
      <DiscussProject/>
      <br/>
      {/* footer for the page */}
      <Footer />
      
    </div>
  );
}
