import React, {Component} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import KeypadComponent from './components/ButtonComponents/KeypadComponent';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      total: ""
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick = button => {
    if(button === "=") {
      this.calculate()
    }
    else if(button === "clear") {
      this.reset()
    }
    else {
      this.setState({
        total: this.state.total + button
      })
    }
  };

  calculate = () => {
    var checkResult = ''
    if(this.state.total.includes('--')) {
      checkResult = this.state.total.replace('--', '+')
    }
    else {
      checkResult = this.state.total
    }
    try {
      this.setState({
        // eslint-disable-next-line
        total: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        total: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      total: "0"
    })
  };

  render() {
    return (
      <div className="container">
        <CalculatorDisplay total={this.state.total} />
        <KeypadComponent onClick={this.onClick} />
      </div>
    );
  }
};

export default App;
