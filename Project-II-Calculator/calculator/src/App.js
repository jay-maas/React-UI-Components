import React, {Component} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends Component{
  static defaultProps = {
    number: [
      {
      name: "clear",
      text: "clear",
      buttonStylings: "number clear",
      },
      {
      name: "7",
      text: "7",
      buttonStylings: "number"
      },
      {
      name: "8",
      text: "8",
      buttonStylings: "number"
      },
      {
      name: "9",
      text: "9",
      buttonStylings: "number"
      },
      {
      name: "4",
      text: "4",
      buttonStylings: "number"
      },
      {
      name: "5",
      text: "5",
      buttonStylings: "number"
      },
      {
      name: "6",
      text: "6",
      buttonStylings: "number"
      },
      {
      name: "1",
      text: "1",
      buttonStylings: "number"
      },
      {
      name: "2",
      text: "2",
      buttonStylings: "number"
      },
      {
      name: "3",
      text: "3",
      buttonStylings: "number"
      },
      {
      name: "0",
      text: "0",
      buttonStylings: "number zero"
      }
  ],
    action: [
        {
        name: "/",
        text: "÷",
        buttonStylings: "action divide"
        },
        {
        name: "*",
        text: "x",
        buttonStylings: "action multiply"
        },
        {
        name: "-",
        text: "-",
        buttonStylings: "action minus"
        },
        {
        name: "+",
        text: "+",
        buttonStylings: "action sum"
        },
        {
        name: "=",
        text: "=",
        buttonStylings: "action equals"
        }
    ]
  }
    
  constructor(props) {
    super(props)
    this.state = {
      total: ""
    }
  }


  click = button => {
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
      total: ""
    })
  };

  render() {
    // if (this.state.total)
    if (this.state.total.length >= 15) {
      alert ('Please do not use such a large number. This function is not supported yet')
        this.reset();
    } 
    return (
      <div className="container">

        <CalculatorDisplay total={this.state.total} />

        <div className="buttons">

          <NumberButton 
          onClick={(e) => this.click(e.target.name)}
          numbers={this.props.number}
            />

          <ActionButton 
          onClick={(e) => this.click(e.target.name)}
          actions={this.props.action}
          />

        </div>

      </div>
    );
  }
}

export default App;
