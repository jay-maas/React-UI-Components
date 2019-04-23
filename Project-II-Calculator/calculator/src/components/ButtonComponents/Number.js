import React, {Component} from 'react';
import './Button.css';

class Number extends Component {
    render() {
        const {text, buttonStylings} = this.props;

        return (
            <button className={buttonStylings}>{text}</button>
        );
    }
  };
  
  export default Number;