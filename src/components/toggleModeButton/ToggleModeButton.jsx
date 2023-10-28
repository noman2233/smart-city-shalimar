import React from "react";
import "./toggleModeButton.css";
import Switch from "react-switch";
import { useContext } from "react";
import { ChangeModeContext } from "../../App";
const ToggleModeButton = () => {
  const { theme, ToggleTheme } = useContext(ChangeModeContext);

  return (
    <div className="toggleModeButton_container">
      <span className="dark_mode_label">Light</span>

      <Switch
        className="dark_mode toggleModeButton"
        onChange={ToggleTheme}
        checked={theme === "dark"}
      />
      <span className="dark_mode_label">Dark</span>
    </div>
  );
};

export default ToggleModeButton;
