import React, {useState, useEffect} from "react";

export default function Add() {
    const url = '/add';
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [r, setR] = useState({'r': 0});

    useEffect(() => {
        sendFormDataToApi();
    }, []);

    const createFormData=()=>{
        const formData=new FormData();
        formData.set('n1',n1.toString());
        formData.set('n2',n2.toString());
        return formData;
    }

    const sendFormDataToApi=async ()=>{
        const formData=createFormData();
        console.log('N1=',n1);
        console.log('N2=',n2);
        const response=await fetch(url,{
            method:'POST',
            body:formData
        }).then(res=>res.json());
        console.log('Response from API', response);
    }

    return (
        <>
            <form>
                <label htmlFor="n1">Enter first Number: </label>
                <input id='n1' name='n1' value={n1} placeholder='Enter first number' onChange={event => {
                    setN1(parseInt(event.target.value))
                }}/>

                <label htmlFor="n2">Enter second Number: </label>
                <input id='n2' name='n2' value={n2} placeholder='Enter second number' onChange={event => {
                    setN2(parseInt(event.target.value))
                }}/>
                <button type={"submit"}>Add</button>

            </form>
            The result is {r.r}
        </>
    );
}