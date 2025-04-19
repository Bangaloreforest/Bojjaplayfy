import React from 'react';
import './sidebar.css';
import Cards from './Cards';

const Sidebar = () => {
  const Text = [
    "Legal",
    "Security and Privacy Center",
    "Privacy Policy",
    "Cookies",
    "About Ads",
    "Accessibility"
  ];

  return (
    <div className="sidebarMainContainer">
      <div className="sidebarTopSection">
        <h1>Your Library</h1>
        <p>+</p>
      </div>

      <div className="sidebarMiddleSection">
        <Cards
          heading="Create Your First Playlist"
          subheading="It's easy, and we will help you."
          buttontext="Create Playlist"
        />
        <Cards
          heading="Let's find some podcasts to follow"
          subheading="We'll keep you updated."
          buttontext="Browse Podcasts"
        />
      </div>

      <div className="sidebarBottomSection">
        <div className="sidebarBottomSectionTopContainer">
          {Text.map((ele, index) => (
            <p key={index}>{ele}</p>
          ))}
        </div>
        <div className="sidebarBottomSectionBottomContainer">
          <p>Cookies</p>
        </div>
        <div className="sidebarBottomSectionBottomContainer">
          <button>English</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;