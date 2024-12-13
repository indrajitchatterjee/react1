import {useState} from "react";

export default function Factorial() {
    const [n, setN] = useState('0');
    const [f, setF] = useState(1);

    function calculateFactorial() {
        let n1 = parseInt(n);
        let f1 = 1
        let i;
        for (i = 2; i <= n1; i++) {
            f1 *= i;
        }
        setF(f1);
    }

    return (
        <>
            <label htmlFor="input-no">Enter a Number: </label>

            <input id='input-no' value={n} placeholder='Enter a number' onChange={event => {
                setN(event.target.value)
            }}/>
            <button onClick={calculateFactorial}>Factorial</button>
            {f}
        </>
    );
}