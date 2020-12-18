import React from 'react';
import Counter from "../components/Counter";

class CounterContainer extends React.Component {
        constructor(props) {
                super(props);

                this.state = {
                        countValue: 0,
                }
        }

        handleAdd = () => {
                this.setState({countValue: this.state.countValue + 1})
        }

        handleRemove =() => {
                this.setState({countValue: this.state.countValue - 1})
        }
        handleReset =() => {
                this.setState({countValue: this.state.countValue = 0})
        }

        render() {
                return(
                        <Counter counterValue={this.state.countValue} handleAdd={this.handleAdd} handleRemove={this.handleRemove} handleReset={this.handleReset}/>
                );
        }
}
export default CounterContainer;