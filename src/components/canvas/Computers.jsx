import React, { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [contextLimitReached, setContextLimitReached] = useState(false);
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Screen size check
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // WebGL support and context limit check
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl", { failIfMajorPerformanceCaveat: true });
      if (!gl) {
        setIsWebGLSupported(false);
        setError("WebGL not supported or performance too low");
      } else {
        // Check for context limit (rough heuristic)
        const contexts = document.getElementsByTagName("canvas").length;
        if (contexts > 8) { // Arbitrary limit, adjust based on testing
          setContextLimitReached(true);
          setError("Too many WebGL contexts active");
        }
      }
    } catch (err) {
      setIsWebGLSupported(false);
      setError("Failed to initialize WebGL: " + err.message);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Fallback for WebGL, context limit, or errors
  if (!isWebGLSupported || contextLimitReached || error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white text-center bg-black">
        {error || "Your device doesn’t support 3D visuals."}
      </div>
    );
  }

  return (
    <Canvas
      ref={canvasRef}
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
