import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>“Get Your Favourite Meal Delivered Fast”</h2>
        <p>
          Explore a diverse menu of carefully crafted dishes made with the
          finest ingredients. Our goal is to delight your taste buds and make
          every meal an unforgettable experience.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
