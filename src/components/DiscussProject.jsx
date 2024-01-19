"use client";
import React from "react";
import styles from "./styles/DiscussProject.module.css";
function DiscussProject() {
  return (
    <div>
      <h1 className="text-[40px] mx-80 pt-20 pb-20">
        Ready to discuss your
        <br />
        <span className="font-bold">project</span> concept?
      </h1>

      <div className="w-full size-96">
      <video autoPlay muted loop className={styles.myVideo}>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* other content goes here */}
      <h2>Hello</h2>
      </div>
    </div>
  );
}
export default DiscussProject;
