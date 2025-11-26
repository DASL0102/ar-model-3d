import React, { useState } from "react";

export default function App() {
  const [scale, setScale] = useState(1.5); // escala inicial

  const iframeContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>AR Multi Model</title>
        <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/aframe-extras@6.1.1/dist/aframe-extras.min.js"></script>
        <script src="https://cdn.rawgit.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.min.js"></script>
        <style>
          html, body { margin:0; padding:0; width:100%; height:100%; overflow:hidden; }
          a-scene { width:100%; height:100%; }
        </style>
      </head>
      <body>
        <a-scene vr-mode-ui="enabled:false" arjs="sourceType: webcam; debugUIEnabled:false;">
          
          <!-- Marker 1 -->
          <a-marker type="pattern" url="marker.patt">
            <a-entity 
              gltf-model="url(pcb production line animated-1.glb)" 
              animation-mixer="clip: *; loop: repeat;"
              scale="${scale} ${scale} ${scale}"
              position="0 0 0"
            ></a-entity>
          </a-marker>

          <!-- Marker 2 -->
          <a-marker type="pattern" url="marker2.patt">
            <a-entity 
              gltf-model="url(pcb production line animated-1.glb)" 
              animation-mixer="clip: *; loop: repeat;"
              scale="${scale} ${scale} ${scale}"
              position="0 0 0"
            ></a-entity>
          </a-marker>

          <!-- Marker 3 -->
          <a-marker type="pattern" url="marker3.patt">
            <a-entity 
              gltf-model="url(pcb production line animated-1.glb)" 
              animation-mixer="clip: *; loop: repeat;"
              scale="${scale} ${scale} ${scale}"
              position="0 0 0"
            ></a-entity>
          </a-marker>

          <a-entity camera></a-entity>

        </a-scene>
      </body>
    </html>
  `;

  return (
    <>
      {/* Slider UI */}
      <div
        style={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10000,
          background: "rgba(255,255,255,0.8)",
          padding: "8px 12px",
          borderRadius: "8px",
          fontFamily: "sans-serif"
        }}
      >
        <label>
          Tamaño Modelo 1: {scale.toFixed(2)}
          <br />
          <input
            type="range"
            min="0.5"
            max="4"
            step="0.1"
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            style={{ width: "200px" }}
          />
        </label>
      </div>

      <iframe
        title="AR Multi Model"
        srcDoc={iframeContent}
        allow="camera"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          border: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}
