import React, {Component} from 'react';
import Action from './Action';
import './Button.css';

class ActionButton extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            action: [
                {
                text: "÷",
                buttonStylings: "action divide"
                },
                {
                text: "x",
                buttonStylings: "action multiply"
                },
                {
                text: "-",
                buttonStylings: "action minus"
                },
                {
                text: "+",
                buttonStylings: "action sum"
                },
                {
                text: "=",
                buttonStylings: "action equals"
                }
            ]
        }
    }
    render() {
        const action = this.state.action.map((r, index) => (
            <Action key={index} {...r} />
        ));

        return (
            <div className="actionButtons">
                {action}
            </div>
        );
    }
  };
  
  export default ActionButton;