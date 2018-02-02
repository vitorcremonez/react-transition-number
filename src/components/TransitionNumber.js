import React, {Component} from 'react';

class TransitionNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.children,
        };
    }

    componentWillUpdate(newProps) {
        let a = this.props.children;
        let b = newProps.children;
        if (a !== b) {
            for (let x=0; x<=1; x+=(1/this.props.points)) {
                //alert(x);
                setTimeout(() => {
                        this.setState({
                            number: Math.round(a + x*(b-a)),
                        });
                    },
                    this.f(x) * this.props.duration
                );
                setTimeout(() => {
                        this.setState({
                            number: Math.round(b),
                        });
                    },
                    this.props.duration
                );
            }
        }
    }

    f(x) {
        return Math.sin((x-1)*Math.PI/2) + 1;
        return x;
    }

    render() {
        return (
            <span>
                { this.state.number }
            </span>
        );
    }
}

export default TransitionNumber;