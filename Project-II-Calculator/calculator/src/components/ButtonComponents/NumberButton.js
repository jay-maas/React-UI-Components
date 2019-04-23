import React, {Component} from 'react';
// import Number from './Number';
import './Button.css';

class NumberButton extends Component {
    // constructor(props) {
    //     super(props); 
    //     this.state = {
    //         number: [
    //           {
    //           text: "clear",
    //           buttonStylings: "number clear",
    //           name: "clear",
    //           },
    //           {
    //           text: "7",
    //           buttonStylings: "number"
    //           },
    //           {
    //           text: "8",
    //           buttonStylings: "number"
    //           },
    //           {
    //           text: "9",
    //           buttonStylings: "number"
    //           },
    //           {
    //           text: "4",
    //           buttonStylings: "number"
    //           },
    //           {
    //           text: "5",
    //           buttonStylings: "number"
    //           },
    //           {
    //           text: "6",
    //           buttonStylings: "number"
    //           },
    //           {
    //           text: "1",
    //           buttonStylings: "number"
    //           },
    //           {
    //           text: "2",
    //           buttonStylings: "number"
    //           },
    //           {
    //           text: "3",
    //           buttonStylings: "number"
    //           },
    //           {
    //           text: "0",
    //           buttonStylings: "number zero"
    //           }
    //       ]
    //       }
    // }
    render() {
        const numberButtons = this.props.numbers.map((numb, index) => {
            return <button 
            key={index}
            name={numb.name}
            className={numb.buttonStylings}
            onClick={this.props.onClick}
            >{numb.text}</button>
        });

        return (
            <div className="numberButtons">
                {numberButtons}
            </div>
        );
    }
}
  
export default NumberButton;