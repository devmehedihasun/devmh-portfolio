"use client";
import { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add("preloader-deactivate");
      }, 1000);
    }
  }, []);

  return (
    <div className="preloader">
      <img 
        src="assets/preloader/preloader.gif" 
        alt="preloader" 
        className="preloader-img"
      />
    </div>
  );
}