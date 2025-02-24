import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    

    return (
    <div className="flex flex-col items-center mt-6">
       <h2 className="text-xl font-bold">Counter: {count}</h2>
       <div className="mt-3">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
    );
}

export default Counter;