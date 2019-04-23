import React, {Component} from 'react';
import './Button.css';

class Action extends Component {
    render() {
        const {name, text, buttonStylings} = this.props;

        return (
            <button name={name} className={buttonStylings}>{text}</button>
        );
    }
  };
  
  export default Action;