import "./globals.css";
import HomeBanner from "@/components/homepage/HomepageSlider";
import ServicesComponent from "@/components/homepage/ServicesComponent";
import OurServices from "@/components/homepage/OurServices";
import OurPortfolio from "@/components/OurPortfolio";
import DiscussProject from "@/components/DiscussProject";
import Footer from "@/components/Footer";
import FAQs from "@/components/FAQs";



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
      <hr className="border border-gray-900 mx-10 mt-10"/>
      <OurServices />
      <hr className="border border-gray-900 mx-10"/>
      <OurPortfolio />
      <hr className="border border-gray-900 mx-10 mt-10"/>
      <FAQs/>
      <hr className="border border-gray-900 mx-10"/>
      <DiscussProject />
     {/* Footer */}
     <div className="mt-10 ">
     <Footer/>
     </div>
    </div>
  );
}
