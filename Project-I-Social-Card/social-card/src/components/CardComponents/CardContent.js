import React from 'react';
import CardBanner from './CardBanner';
import './Card.css';

const handleClick = function(e) {
  e.preventDefault();
  window.open('https://reactjs.org/', '_blank');
}

const CardContent = () => {
    return (
      <div className="cardContent" onClick={handleClick}>
          <p>Let's learn React by building simpole interfaces with components. Don't try to 
            overthink it, just keep it simple and have fun. Once you feel comfortable using
            components you are well on your way to mastering React!
          </p>

        <CardBanner />

        <div className="belowBanner">
          <h3>Get started with React</h3>
          <p>React makes it painless to create interactive UIs. Design simple views for
            each state in our application.
          </p>
          <a href="https://reactjs.org/" alt="link to react website">reactjs.org</a>
        </div>
      </div>
    );
  };
  
  export default CardContent;