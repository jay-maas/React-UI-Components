import React, {Component} from 'react';
import Sky from 'react-sky';
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
        name: "backspace",
        text: "←",
        buttonStylings: "action backspace",
        },
        {
        name: "*",
        text: "x",
        buttonStylings: "action multiply"
        },
        {
        name: "+",
        text: "+",
        buttonStylings: "action sum"
        },
        {
        name: "(",
        text: "(",
        buttonStylings: "action left-par"
        },
        {
        name: ".",
        text: ".",
        buttonStylings: "action decimal"
        },
        {
        name: "/",
        text: "÷",
        buttonStylings: "action divide"
        },
        {
        name: "-",
        text: "-",
        buttonStylings: "action minus"
        },
        {
        name: ")",
        text: ")",
        buttonStylings: "action"
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
    else if(button === "backspace") {
      this.backspace()
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
        // eval is subject to 3rd party attackers looseJSONParse
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

  backspace = () => {
    this.setState({
      total: this.state.total.slice(0,-1)
    })
  }

  render() {
    return (

      <div className="container">
          <Sky
            images={{
              /* FORMAT AS FOLLOWS */
              0: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png",  /* You can pass as many images as you want */
              1: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-128.png",
              2: "https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-128.png"
            }}
            how={130} /* Pass the number of images Sky will render chosing randomly */
            time={10} /* time of animation */
            size={'100px'} /* size of the rendered images */
            background={'url("https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'} /* color of background */
          />

        <div className="calcContainer">
  
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
      </div>
    );
  }
}

export default App;
