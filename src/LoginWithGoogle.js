import React, { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { FaGoogle } from "react-icons/fa";

function LoginWithGoogle(props)
{
   
   
const login=useGoogleLogin({
    onSuccess: (codeResponse) => {console.log(codeResponse);user_detail(codeResponse);},
    onError: (error) => console.log('Login Failed:', error)
})
function user_detail(r)
{
     fetch('https://www.googleapis.com/oauth2/v1/userinfo?access_token='+r.access_token)
       
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data);
        insertData(data)
     })
     .catch((err)=>{
        console.log(err);
     })
    
}
function insertData(t)
{
    fetch('http://localhost:2100/insertGoogleData',{
        method:'post',
        mode:'cors',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(t)
    })
    .then((data)=>{alert('welcome');
    window.localStorage.setItem("token", data.token);
    window.localStorage.setItem("name", data.name);
    props.u(data.name)
})
    .catch((err)=>{console.log(err)})
}
    return(
        <div>

<a href='#' style={{border:'0px solid'}} onClick={login}><FaGoogle style={{color:'blue',fontSize:'0.8cm'}}></FaGoogle></a>
        </div>
    )
}
export default LoginWithGoogle;