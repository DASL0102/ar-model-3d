import React, { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    const resizeVideo = () => {
      const video = document.querySelector("video");
      const container = document.querySelector(".ar-container");
      if (video && container) {
        // Ajusta video al contenedor
        video.style.position = "absolute";
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.style.top = "0";
        video.style.left = "0";
        
        
      }
    };

    // AR.js tarda un poco en crear el video, así que usamos MutationObserver
    const observer = new MutationObserver(resizeVideo);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ar-container">
      <a-scene
        embedded
        arjs="sourceType: webcam; sourceWidth: 640; sourceHeight: 480;"
      >
        <a-entity camera look-controls></a-entity>
      </a-scene>
    </div>
  );
}
