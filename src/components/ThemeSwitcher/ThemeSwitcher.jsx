import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

import useTheme from "../../hooks/useTheme";

import "./themeSwitcher.css";

function ThemeSwitcher() {

  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (

    <button

      className="theme-switch"

      onClick={toggleTheme}

    >

      <div
        className={`theme-slider ${
          theme === "dark"
            ? "dark"
            : "light"
        }`}
      >

        {theme === "dark"

          ? <FaMoon />

          : <FaSun />

        }

      </div>

    </button>

  );

}

export default ThemeSwitcher;