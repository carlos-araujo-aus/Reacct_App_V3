// useCounter.jsx - Custom Hook:

import { useState } from "react";

function useCounter(initialValue = 10) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)
    const reset = () => setCount(initialValue)

    return { 
        count, 
        increment, 
        decrement, 
        reset 
    }
}

export default useCounter;