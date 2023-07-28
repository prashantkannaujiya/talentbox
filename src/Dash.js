import React, { useEffect, useState } from "react";
import './style.css';
function Dash(props)
{
    var [courses,setcourses]=useState([{courseName:'',pic:''}])
    useEffect(()=>{
        alert('Welcome '+props.u)
fetch('http://localhost:2100/fetchCourse')
.then(res=>res.json())
.then((data)=>{
    console.log(data)
setcourses(data[0].courses);
})
    },[])
    return(
        <div id='Dashh'>
<h4>Welcome to freeCodeCamp.org</h4>
<p>I have not failed. I've just found 10,000 ways that won't work</p>
<p>Thomas A. Edison</p>
<div id='dash'>
    {
courses.map((a)=>{
    return <div id='courseBox'>
    <img src={a.pic}/>
    <span>{a.courseName}</span>
    </div>
})
    }
</div>
        </div>
    )
}
export default Dash;