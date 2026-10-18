import React from "react";
import { navigationItems } from "../data/portfolioData.js";
import { ShieldIcon } from "./Icons.jsx";

function SiteHeader({ activeSection, onNavigate }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button
          className="brand-button"
          type="button"
          onClick={() => onNavigate("home")}
          aria-label="Go to the home section"
        >
          <span className="brand-shield">
            <ShieldIcon />
          </span>
          <span className="brand-name">
            JSM<span className="brand-cursor">_</span>
          </span>
        </button>

        <nav className="site-nav" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <button
              className={
                activeSection === item.id ? "nav-link is-active" : "nav-link"
              }
              key={item.id}
              type="button"
              aria-current={activeSection === item.id ? "location" : undefined}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
