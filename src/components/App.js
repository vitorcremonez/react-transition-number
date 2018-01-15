import React, {Component} from 'react';
import '../styles/App.css';
import TransitionNumber from "./TransitionNumber";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myNumber: 0,
        };
    }

    render() {
        return (
            <h1>
                <TransitionNumber>
                    { this.state.myNumber }
                </TransitionNumber>
            </h1>
        );
    }
}

export default App;
