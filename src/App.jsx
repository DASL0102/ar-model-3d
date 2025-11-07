import React from "react";

export default function App() {
  const iframeContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>AR Multi Model</title>
        <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
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
              gltf-model="url(tarjeta.glb)" 
              scale="1.5 1.5 1.5"
              position="0 0 0"
            ></a-entity>
          </a-marker>

          <!-- Marker 2 -->
          <a-marker type="pattern" url="marker2.patt">
            <a-entity 
              gltf-model="url(soccer.glb)" 
              scale="2 2 2"
              position="0 0 0"
            ></a-entity>
          </a-marker>

          <!-- Marker 3 -->
          <a-marker type="pattern" url="marker3.patt">
            <a-entity 
              gltf-model="url(medieval.glb)" 
              scale="2 2 2"
              position="0 0 0"
            ></a-entity>
          </a-marker>

     

          <a-entity camera></a-entity>

        </a-scene>
      </body>
    </html>
  `;

  return (
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
  );
}
