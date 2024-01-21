"use client";
import Navbar from "../components/Navbar";
import styles from "./styles/HomeBanner.module.css";


const HomeBanner = () => {
  return (
    <div className={styles.mainContainer}>
         <Navbar/>
      <div className={styles.homeBanner}>
        {/* left content */}
        <div className={styles.leftContent}>
          <button className={styles.homeBannerButton}>Got An Idea?</button>
        </div>
        {/* right content */}
        <div className={styles.rightContent}>
          <h1 className="text-[50px] font-bold">
            A creative <span className="text-blue-950">digital agency</span>
          </h1>
          <hr className="border border-[5px] w-[200px] ml-[270px]" />
          <h4 className="text-[30px]">
            We are a global CMMI Level 3 Appraised, IT Solutions Integrator Cum
            Consulting Company having a presence in over 16 countries.
          </h4>
        </div>
        <br />
      </div>
    </div>
  );
};

export default HomeBanner;
