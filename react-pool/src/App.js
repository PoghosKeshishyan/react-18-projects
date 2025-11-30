import { useState, useRef } from 'react';
import { Buttons } from './components/Buttons';
import { Pool } from './components/Pool';

export default function App() {
    const [count, setCount] = useState(0);
    const isRunning = useRef(false);

    const fillPool = () => {
        if (isRunning.current) return;
        isRunning.current = true;

        const startTime = Date.now();
        const interval = setInterval(() => {
            setCount(prev => prev + 1);

            if (Date.now() - startTime > 5000) {
                clearInterval(interval);
                isRunning.current = false;
            }
        }, 1000);
    }

    const emptyPool = () => {
        if (isRunning.current) return;
        isRunning.current = true;

        const startTime = Date.now();
        const interval = setInterval(() => {
            setCount(prev => prev - 1);

            if (Date.now() - startTime > 5000) {
                clearInterval(interval);
                isRunning.current = false;
            }
        }, 1000);
    }

    return (
        <div className='App'>
            <h1>POOL - {count}</h1>
            <Buttons fillPool={fillPool} emptyPool={emptyPool} />
            <Pool count={count} />
        </div>
    );
}