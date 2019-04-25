import React from 'react';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import './Header.css';

const HeaderContent = () => {
    return (
      <div className="headerContent">
          <ImageThumbnail />
          <HeaderTitle />
      </div>
    );
  };
  
  export default HeaderContent;