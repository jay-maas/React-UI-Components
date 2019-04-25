import React, {Component} from 'react';
import './Display.css';

class CalculatorDisplay extends Component {
    render() {
        let {total} = this.props;
        return (
            <div className="calculatorDisplay">
                <div className="answer">{total}</div>
            </div>
        );
    }
  };
  
  export default CalculatorDisplay;