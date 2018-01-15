import React, {Component} from 'react';

class TransitionNumber extends Component {
    render() {
        return (
            <span>
                { this.props.children }
            </span>
        );
    }
}

export default TransitionNumber;