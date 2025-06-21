import React,{ useState, useMemo } from "react";
import { useCallback } from "react";

const Child = React.memo(({counter}) => {
    console.log("Child Component Rendered");
    return (
        <>
            <h3>Child Component</h3>
            <p>Counter: {counter}</p>
        </>
    )
})

function EspensiveCalculation({number}) {
    const result = useMemo(() => {
        console.log("Calculating...")
        return number * 5
    }, [number])

    return (
        <>
            <h3>Espensive Calculation</h3>
            <p>Result: {result}</p>
        </>
    )
}

function CounterWithReactMemo() {
    const [counter, setCounter] = useState (0)

    const increment = useCallback(() => {
        setCounter(prev => prev + 1)
    }, [])

    return (
        <>
            <h2>Parent Component</h2>
            <button 
                onClick={increment}>Increment
            </button>
            <Child counter={counter} />
            <EspensiveCalculation number={counter} />
        </>
    )
}

export default CounterWithReactMemo;

