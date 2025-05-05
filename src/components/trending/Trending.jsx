import React from 'react';
import './trending.css';
import Trendingcard from '../trendingCard/Trendingcard';

const Trending = ({ setCurrentPage, setCurrentEle }) => {
  return (
    <div className="trendingSectionMainContainer">
      {/* Header Section */}
      <div className="trendingHeader">
        <img src="src/assets/images/svac.png" alt="Logo" className="Trending-logo" />
        <h1>S V Annamacharya Nithya Sankeerthana Songs</h1>
      </div>

      {/* Trending Card Section */}
      <div className="trendingCardContainer">
        <Trendingcard setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
      </div>
    </div>
  );
};

export default Trending;