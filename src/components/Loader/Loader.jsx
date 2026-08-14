import { useEffect, useState } from "react";
import "./loader.css";

function Loader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`loader-overlay ${
        fadeOut ? "loader-hide" : ""
      }`}
    >
      <div className="loader-content">

        <div className="loader-spinner"></div>

        <h1 className="loader-title">
          GOKULNATH
        </h1>

        <p className="loader-subtitle">
          Building Amazing Experiences...
        </p>

      </div>
    </div>
  );
}

export default Loader;