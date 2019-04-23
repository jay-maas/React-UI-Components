import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => {
    return (
      <div className="headerTitle">
          <h1>Lambda School</h1>
          <h2><a href="https://twitter.com/LambdaSchool" alt="twitter">@LambdaSchool</a> - {moment().format('MMM Do')}</h2>
      </div>
    );
  };
  
  export default HeaderTitle;