import React from 'react';
import CounterContainer2 from '@/components/CounterContainer2';
import { render } from '@testing-library/react';
import CounterContainer from '../containers/CounterContainer';

const Counter = ({counterValue, handleAdd, handleRemove, handleReset}) => {
        return (
                <div className='counter'>
                        <h1> {counterValue}</h1>

                        <div>
                                <button style={{marginRight: 10}} onClick={handleAdd}>+</button>
                                <button onClick={handleReset}>Reset</button>
                                <button style={{marginLeft: 10}} onClick={handleRemove}>-</button>
                        </div>
                </div>
        );
        
};
render() {
        return (
                <CounterContainer2 Counter={Counter}/>
        )
}

export default Counter;