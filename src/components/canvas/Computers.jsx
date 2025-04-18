import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // WebGL support check
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setIsWebGLSupported(false);
      }
    } catch (err) {
      setIsWebGLSupported(false);
      setError("Failed to initialize WebGL");
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

  // Fallback for WebGL or errors
  if (!isWebGLSupported || error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white text-center bg-black">
        {error || "Your device doesn’t support 3D visuals."}
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [5, 5, 5], fov: 25 }}
      gl={{ antialias: !isMobile }}
      style={{ height: "100%", width: "100%", background: "black" }}
    >
      {/* Empty canvas to test WebGL initialization */}
    </Canvas>
  );
};

// Error boundary to catch rendering errors
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center text-white text-center bg-black">
          Failed to load 3D content: {this.state.error?.message || "Unknown error"}
        </div>
      );
    }
    return this.props.children;
  }
}

// Wrap ComputersCanvas in ErrorBoundary
const WrappedComputersCanvas = () => (
  <ErrorBoundary>
    <ComputersCanvas />
  </ErrorBoundary>
);

export default WrappedComputersCanvas;
