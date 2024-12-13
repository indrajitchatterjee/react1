import {useState} from "react";
export default function Form(){
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName] = useState("")

    function handleReset() {
        setFirstName('');
        setLastName('');
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={event => {setFirstName(event.target.value)}}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={event => {setLastName(event.target.value)}}
            />
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
 }