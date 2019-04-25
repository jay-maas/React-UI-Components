import React, {Component} from 'react';
// import Action from './Action';
import './Button.css';

class ActionButton extends Component {
    // constructor(props) {
    //     super(props); 
    //     this.state = {
    // }
    render() {
        const actionButtons = this.props.actions.map((act, index) => {
            return <button 
            key={index}
            name={act.name}
            className={act.buttonStylings}
            onClick={this.props.onClick}
            >{act.text}</button>
        });

        return (
            <div className="actionButtons">
                {actionButtons}
            </div>
        );
    }
}

export default ActionButton;