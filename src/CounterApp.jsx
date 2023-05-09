import { useState } from "react";
import propTypes from "prop-types";

export const CounterApp = ({value})=>{
    let [counter, setCounter] = useState( value );
    let handleAdd = ()=>{
        setCounter(counter + 1) 
    }
    let handleSubstract = ()=>{
        setCounter(counter - 1) 
    }
    let handleReset= ()=>{
        setCounter(counter = value) 
    }
    return(
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value : propTypes.number.isRequired
}

CounterApp.defaultProperties = {
    value: 2
}