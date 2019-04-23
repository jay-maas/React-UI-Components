import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0
    }
    this.click1 = this.click1.bind(this);
    this.click2 = this.click2.bind(this);
    this.click3 = this.click3.bind(this);
    this.click4 = this.click4.bind(this);
  }
  click1 () {
    this.setState(({ count1 }) => ({
      count1: count1 + 1
    }));
  };
  click2 () {
    this.setState(({ count2 }) => ({
      count2: count2 + 1
    }));
  };
  click3 () {
    this.setState(({ count3 }) => ({
      count3: count3 + 1
    }));
  };
  click4 () {
    this.setState(({ count4 }) => ({
      count4: count4 + 1
    }));
  };

  render() {
    return (
      <div className="footer">
        <img onClick={this.click1} className="click" src="assets/message.png" alt="footer" /><div className="counter">{this.state.count1}</div>
        <img onClick={this.click2} className="click" src="assets/refresh.png" alt="footer" /><div className="counter">{this.state.count2}</div>
        <img onClick={this.click3} className="click" src="assets/heart.png" alt="footer" /><div className="counter">{this.state.count3}</div>
        <img onClick={this.click4} className="click" src="assets/mail.png" alt="footer" /><div className="counter">{this.state.count4}</div>
      </div>
    );
  }
}

// class Counter extends Component {
//   state = {
//     count: 0
//   }
//   click = () => {
//     this.setState(({ count }) => ({
//       count: count + 1
//     }));
//   };
//   render() {
//     return <div className="counter">{this.state.count}</div>;
//   }
// }

// const Footer = () => {
//     return (
//       <div className="footer">
//         <img className="click" src="assets/message.png" alt="footer" />
//         <img className="click" src="assets/refresh.png" alt="footer" />
//         <img className="click" src="assets/heart.png" alt="footer" />
//         <img className="click" src="assets/mail.png" alt="footer" />
//       </div>
//     );
//   };
  
  export default Footer;