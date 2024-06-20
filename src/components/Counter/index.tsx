import React from "react";
import { useAtom } from "jotai";

import counterAtom from "@/store/counter";

const Counter: React.FC = () => {
    const [count, setCount] = useAtom(counterAtom);
    return (
        <div className="flex flex-col justify-center my-5">
            <button
                className="font-semibold bg-transparent border border-blue-500 inline-flex items-center justify-center rounded hover:bg-blue-500 text-blue-800 hover:text-white hover:border-transparent text px-4 py-2 text-base"
                onClick={() => {
                    setCount((counter) => counter + 1);
                }}
            >
                +1
            </button>
            <span>Counter: {count}</span>
        </div>
    )
}

export default Counter