import React, {Component} from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

class KeypadComponent extends Component{
  render() {
    return (
        <div className="buttons">
            <NumberButton onClick={this.onClick} />
            <ActionButton onClick={this.onClick} />
        </div>
    );
  }
};

export default KeypadComponent;