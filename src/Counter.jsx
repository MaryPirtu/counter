import React from "react";
import Button from "./components/Button";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    decrement() {
        const newCounter = this.state.counter - this.props.step;
        this.setState({ counter: newCounter });
    }

    increment() {
        const newCounter = this.state.counter + this.props.step;
        this.setState({ counter: newCounter });
    }

    render() {
        return (
            <div className="border border-pink-300 p-2 m-2">
                <h1>Counter: {this.state.counter}</h1>
                <Button onClick={() => this.decrement()} >-{this.props.step}</Button>
                <Button onClick={() => this.increment()} >+{this.props.step}</Button>
            </div>
        )
    }
}