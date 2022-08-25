import React from "react";
import {useState} from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

export default function SearchBar ({setitems}){
const [name , setName] = useState("")
console.log(name);
const navigate = useNavigate()


function hadleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
}
function hadleSubmit(e) {
    e.preventDefault()
    axios.get(`http://localhost:3001/api?search=` + name)
    .then((response)=> {
        setitems(response.data)
    })
    .catch((err) => console.log(err))
    setName('')  
    navigate('/api')
}

    return(
        <div>
            <input className="{StyleHome.btnAdmin}" type = 'text' value ={name} placeholder = 'Search garment' onChange= {(e)=> hadleInputChange(e)}/>
            <button className="{StyleHome.btnAdmin}" type = 'submit' onClick = {(e)=> hadleSubmit(e)}>Buscar</button>
        </div>
    )
}
