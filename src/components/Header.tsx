import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../i18n";
import "./Header.css"; 

const Header: React.FC = () => {
  const { t, i18n } = useTranslation(); // Hook to access translations

  const menuItems = [
    { key: "file", label: t("menu.file") },
    { key: "edit", label: t("menu.edit") },
    { key: "selection", label: t("menu.selection") },
    { key: "view", label: t("menu.view") },
    { key: "go", label: t("menu.go") },
    { key: "run", label: t("menu.run") },
    { key: "terminal", label: t("menu.terminal") },
    { key: "help", label: t("menu.help") }
  ];

  return (
    <AppBar position="static" className="header">
      <Toolbar variant="dense">
        {menuItems.map((item) => (
          <Button key={item.key} color="inherit" className="header-button">
            {item.label}
          </Button>
        ))}

        {/* Language Switch Buttons */}
        <Button onClick={() => i18n.changeLanguage("en")} color="inherit">
          🇬🇧 English
        </Button>
        <Button onClick={() => i18n.changeLanguage("ba")} color="inherit">
          🇧🇦 Bosnian
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
