import React from 'react';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import './Header.css';


const HeaderContainer = () => {
    return (
      <div className="headerContainer">
          <HeaderContent />
          <HeaderTitle />
      </div>
    );
  };
  
  export default HeaderContainer;