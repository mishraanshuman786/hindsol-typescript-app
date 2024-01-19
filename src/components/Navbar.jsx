"use client";
import Link from "next/link";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbarComponent}>
      {/* left container */}
      <div style={{ display: "flex", alignItems: "center", margin: "auto" }}>
        <Link href="">
          <img src="logo.png" width={150} height={150}></img>
        </Link>
      </div>

      {/* right container */}
      <ul className={styles.navContainer}>
        <li>
          <select id="services" name="services">
            <option>Services</option>
            <option>Full Stack Development</option>
            <option>Mobility Solution</option>
            <option>Bot development</option>
            <option>Sales Force Development</option>
            <option>AR/VR Solution</option>
            <option>Digital Marketing</option>
          </select>
        </li>
        <li>
          <Link href="/ideas">Ideas</Link>
        </li>
        <li>
          <Link href="/career">Career</Link>
        </li>
        <li>
          <Link href="/aboutUs">About Us</Link>
        </li>
        <li>
          <Link href="/contactUs">Contact Us</Link>
        </li>
        <li>
          <button className={styles.navButton}>Got An Idea?</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
