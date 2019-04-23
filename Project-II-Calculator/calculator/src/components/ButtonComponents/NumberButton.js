import React, {Component} from 'react';
import Number from './Number';
import './Button.css';

class NumberButton extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            number: [
                {
                text: "clear",
                buttonStylings: "number clear"
                },
                {
                text: "7",
                buttonStylings: "number"
                },
                {
                text: "8",
                buttonStylings: "number"
                },
                {
                text: "9",
                buttonStylings: "number"
                },
                {
                text: "4",
                buttonStylings: "number"
                },
                {
                text: "5",
                buttonStylings: "number"
                },
                {
                text: "6",
                buttonStylings: "number"
                },
                {
                text: "1",
                buttonStylings: "number"
                },
                {
                text: "2",
                buttonStylings: "number"
                },
                {
                text: "3",
                buttonStylings: "number"
                },
                {
                text: "0",
                buttonStylings: "number zero"
                }
            ]
        }
    }
    render() {
        const number = this.state.number.map((r, index) => (
            <Number key={index} {...r} />
        ));

        return (
            <div className="numberButtons">
                {number}
            </div>
        );
    }
  };
  
  export default NumberButton;