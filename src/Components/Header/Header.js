import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-image">
      <div className="item">
        <h1>Best foot waiting for your valley</h1>
        <input type="text" placeholder="search food item" />
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default Header;
