import React from 'react';

const Counter = ({counterValue, handleAdd, handleRemove}) => {
        return (
                <div className='counter'>
                        <h1> {counterValue}</h1>

                        <div>
                                <button style={{marginRight: 10}} onClick={handleAdd}>+</button>
                                <button onClick={handleRemove}>-</button>
                        </div>
                </div>
        );
};

export default Counter;