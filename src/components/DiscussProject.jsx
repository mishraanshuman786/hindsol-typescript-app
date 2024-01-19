"use client"
import React from "react";
import styles from "./styles/DiscussProject.module.css";

function DiscussProject() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32">
      <h1 className="text-4xl md:text-5xl lg:text-6xl pt-20 pb-8 md:pb-12">
        Ready to discuss your
        <br />
        <span className="font-bold">project</span> concept?
      </h1>

      <div className="w-full overflow-hidden relative">
        <video autoPlay muted loop className={styles.myVideo + " w-full h-auto"}>
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* other content goes here */}
      </div>
    </div>
  );
}

export default DiscussProject;
