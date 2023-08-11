import React, { useEffect, useState } from "react";
import Home from "./Home";
import Sign from "./Sign";
import Dash from "./Dash";
function App()
{
  var [navigate,setnavigate]=useState(0);
  var [user,setuser]=useState(null)
  var [isloading,setisloading]=useState(false);

  useEffect(()=>{
    
    var u=window.localStorage.getItem("token");
    console.log(u)
    if(u!=null)
    {
      setisloading(true)
      fetch('https://deploy-tm73.onrender.com/auth/'+u)
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "approved") {
          console.log(data.data)
        openDash(data.data);
       setisloading(false)
        var l=document.getElementById('logout');
        l.style.display='inline';
        }
        else
        {
          setisloading(false)
          window.localStorage.clear();
        }
    });
    }
      },[])
  function openDash(i)
  {
    setuser(i)
    setnavigate(2);

  }
  function logoff()
  {
    window.localStorage.clear();
    setuser(null);
    setnavigate(0);
    document.getElementById('logout').style.display='none';
  }
  return(
    <div id='App'>
    <div id='header'>
      <span id='webName'>CodeBootCamp(^)</span>
      <button id='logout' onClick={logoff}>Logout</button>
      <button className="header_button" style={{color:'white',backgroundColor:'black',border:'1px solid'}}>Menu</button>
      <button className="header_button" style={{backgroundColor:'rgb(241, 185, 31)',border:'1px solid rgb(241, 185, 31) '}} onClick={()=>{setnavigate(1)}}>Sign In</button>
    </div>
{
  (()=>{
    if(navigate==0)
    {
      return <Home></Home>
    }
    else if(navigate==1)
    {
     return <Sign u={openDash}></Sign>
    }
    else{
return <Dash u={user}></Dash>
    }
  })()
}
<div>
{
 (()=>{
if(isloading)
{
  document.querySelector('body').style.opacity='0.3';
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
export default App;
