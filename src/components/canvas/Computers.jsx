import React, { useEffect, useState } from "react";

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

  // Always render a visible fallback to test rendering
  return (
    <div
      className="w-full h-full flex items-center justify-center text-white text-center"
      style={{ background: "black", minHeight: "100vh" }}
    >
      {isWebGLSupported && !error ? (
        <div>WebGL is supported, but Canvas is not rendering. Check console for errors.</div>
      ) : (
        <div>{error || "Your device doesn’t support 3D visuals."}</div>
      )}
    </div>
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
