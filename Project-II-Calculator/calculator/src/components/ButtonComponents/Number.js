import React, {Component} from 'react';
import './Button.css';

class Number extends Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
        const {name, text, buttonStylings} = this.props;

        return (
            <button 
            name={name} 
            className={buttonStylings}
            onClick={e => this.props.onClick(e.target.name)}
            >{text}</button>
        );
    }
  };
  
  export default Number;