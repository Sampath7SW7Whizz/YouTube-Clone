import React from 'react';
import CategoriesButtonContainer from "./CategoriesButtonContainer";
import VideosListContainer from "./VideosListContainer";

const MainContainer = () => {
  return (
    <div className="w-[1104px]">
      <CategoriesButtonContainer />
      <VideosListContainer />
    </div>
  );
};

export default MainContainer;