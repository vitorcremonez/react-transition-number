import React, {Component} from 'react';
import '../styles/App.css';
import TransitionNumber from "./TransitionNumber";
import BadgeNotification from 'react-badge-notification';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myNumber: 0,
        };
    }

    randomNumber() {
        this.setState({
            myNumber: this.state.myNumber+100//Math.round(Math.random() * 10000000)
        })
    }

    render() {
        return (
            <h1>
                { this.state.myNumber }
                <br/>
                <TransitionNumber duration={1000} points={60}>
                    { this.state.myNumber }
                </TransitionNumber>
                <br/>
                <button onClick={() => this.randomNumber()}>sort number</button>
                <BadgeNotification quantity={10}>
                    olá mundo
                </BadgeNotification>
                <div className="badge-notification">
                    ops
                </div>
            </h1>
        );
    }
}

export default App;
