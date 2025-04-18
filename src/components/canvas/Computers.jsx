import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Screen size check
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // WebGL support check
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setIsWebGLSupported(false);
      }
    } catch (err) {
      setIsWebGLSupported(false);
      setError("Failed to initialize WebGL: " + err.message);
    }

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

  try {
    return (
      <Canvas
        frameloop="demand"
        camera={{ position: [5, 5, 5], fov: 25 }}
        gl={{ antialias: false, failIfMajorPerformanceCaveat: true }}
        style={{ height: "100%", width: "100%", background: "black" }}
        onCreated={({ gl }) => {
          console.log("WebGL context created:", !!gl);
        }}
        onError={(err) => {
          console.error("Canvas error:", err);
          setError("Canvas failed: " + err.message);
        }}
      >
        <ambientLight intensity={0.5} />
      </Canvas>
    );
  } catch (err) {
    console.error("Canvas rendering error:", err);
    return (
      <div className="w-full h-full flex items-center justify-center text-white text-center bg-black">
        Canvas failed: {err.message || "Unknown error"}
      </div>
    );
  }
};

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center text-white text-center bg-black">
          Failed to load content: {this.state.error?.message || "Unknown error"}
        </div>
      );
    }
    return this.props.children;
  }
}

const WrappedComputersCanvas = () => (
  <ErrorBoundary>
    <ComputersCanvas />
  </ErrorBoundary>
);

export default WrappedComputersCanvas;
