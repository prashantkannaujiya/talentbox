import React, { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { FaGoogle } from "react-icons/fa";

function LoginWithGoogle(props)
{
   var[isloading,setisloading]=useState(false)
   
const login=useGoogleLogin({
    onSuccess: (codeResponse) => {console.log(codeResponse);user_detail(codeResponse);},
    onError: (error) => console.log('Login Failed:', error)
})
function user_detail(r)
{ 
    setisloading(true)
     fetch('https://www.googleapis.com/oauth2/v1/userinfo?access_token='+r.access_token)
       
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data);
        insertData(data)
     })
     .catch((err)=>{
        setisloading(false)
        console.log(err);
     })
    
}
function insertData(t)
{
    fetch('https://deploy-tm73.onrender.com/insertGoogleData',{
        method:'post',
        mode:'cors',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(t)
    })
    .then(res=>res.json())
    .then((data)=>{alert('welcome');
    window.localStorage.setItem("token", data.token);
    window.localStorage.setItem("name", data.name);
    var l = document.getElementById("logout");
    l.style.display = "inline";
    console.log(data.name)
    setisloading(false)
    props.g(data.name)
})
    .catch((err)=>{console.log(err)})
}
    return(
        <div>

<a href='#' style={{border:'0px solid'}} onClick={login}><FaGoogle style={{color:'blue',fontSize:'0.8cm'}}></FaGoogle></a>
<div>
{
 (()=>{
if(isloading)
{
   
  return <div className="loaderPar"><div className="loader"></div></div>
}
else
{
  document.querySelector('body').style.opacity='1';
}
 })()
}

</div>

        </div>
    )
}
export default LoginWithGoogle;