import React, { useState } from "react";
import Home from "./Home";
import Sign from "./Sign";
import Dash from "./Dash";
function App()
{
  var [navigate,setnavigate]=useState(0);
  var [user,setuser]=useState(null)

  function openDash(i)
  {
    setuser(i)
    setnavigate(2);

  }
  return(
    <div id='App'>
    <div id='header'>
      <span>freeCodeCamp(^)</span>
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
    </div>
  )
}
export default App;
