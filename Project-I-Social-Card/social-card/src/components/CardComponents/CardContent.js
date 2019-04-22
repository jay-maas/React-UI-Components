import React from 'react';
import CardBanner from './CardBanner';
import './Card.css';

const CardContent = () => {
    return (
      <a href="https://www.reactjs.org" alt="link whole card to website" className="cardContent">
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
          <a href="reactjs.org" alt="link to react website">reactjs.org</a>
        </div>
      </a>
    );
  };
  
  export default CardContent;