import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      {/* Disable shadows on mobile to improve performance */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={!isMobile} // Disable shadows on mobile
        shadow-mapSize={isMobile ? 512 : 1024} // Lower resolution on mobile
      />
      <pointLight intensity={0.8} /> {/* Reduced intensity */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75} // Slightly smaller scale for mobile
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  // Check WebGL support and screen size
  useEffect(() => {
    // WebGL support check
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      setIsWebGLSupported(false);
    }

    // Screen size check
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Fallback for WebGL not supported
  if (!isWebGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white text-center">
        Your device doesn’t support 3D visuals.
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      shadows={!isMobile} // Disable shadows on mobile
      dpr={[1, 1.5]} // Lower DPR for mobile performance
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, antialias: !isMobile }} // Disable antialiasing on mobile
      style={{ height: "100%", width: "100%" }} // Ensure canvas fits container
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
