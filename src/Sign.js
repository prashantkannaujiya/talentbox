import React, { useState } from "react";
import LoginWithGoogle from "./LoginWithGoogle";
import "./style.css";
function Sign(props) {
  var [log, setlog] = useState(0);
  var [isloading,setisloading]=useState(false);
  function signIn(e) {
    e.preventDefault();
    setisloading(true)
    var x = document.getElementsByName("sign");
    var t = {
      email: x[0].value,
      name: x[1].value,
      password: x[2].value,
    };
    fetch("https://deploy-tm73.onrender.com/signup", {
      method: "post",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(t),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "repetition") {
          alert("Email id already exists");
        } else {
          alert("User registered");
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("name", data.name);
          setisloading(false)
          var l = document.getElementById("logout");

          l.style.display = "inline";
          props.u(data.name);
        }
      });
    e.currentTarget.reset();
    console.log(e.currentTarget);
    console.log(e.target);
  }
  function logIn(ev) {
    ev.preventDefault();
    setisloading(true)
    var w = document.getElementsByName("log");
    var p = {
      email: w[0].value,
      password: w[1].value,
    };
    fetch("https://deploy-tm73.onrender.com/login", {
      method: "put",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(p),
    })
      .then((res) => res.json())
      .then((data) => {
setisloading(false)
        if (data.message == "unknown") {
          alert("Kindly register before logging");
        } else if (data.message == "wrong") {
          alert("wrong credentials");
        } else {
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("name", data.name);
          var l = document.getElementById("logout");
          l.style.display = "inline";
          props.u(data.name);
        }
      });
    ev.target.reset();
  }
  function userData(i) {
    console.log(i)
    props.u(i);
  }
  return (
    <div id="sign">
      <h2>Sign in</h2>
      <form
        onSubmit={(e) => {
          signIn(e);
        }}
      >
        <input type="text" placeholder="email" name="sign" />
        <br />
        <input type="text" placeholder="name" name="sign" />
        <br />
        <input type="password" placeholder="password" name="sign" />
        <br />
        <button>Submit</button>
      </form>
      <h3>Sign in with Google</h3>
      <LoginWithGoogle g={userData}></LoginWithGoogle>

      <h4>Log In</h4>
      <button
        onClick={() => {
          setlog(1);
        }}
      >
        Login
      </button>
      {
      log &&
        <form
          onSubmit={(e) => {
            logIn(e);
          }}
        >
          <input type="text" placeholder="email" name="log" />
          <br />

          <input type="password" placeholder="password" name="log" />
          <br />
          <button>Submit</button>
        </form>
        
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
  );
}
export default Sign;
