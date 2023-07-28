import React from "react";
import { FaAmazon, FaApple, FaGoogle, FaMicrosoft, FaSpotify } from "react-icons/fa";
import './style.css';
function Home() {
  return (
    <div id='Home'>
      <h2>Learn to code - for free.</h2>
      <h2>Build Projects.</h2>
      <h2>Earn Certifications.</h2>
      <p>
        Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs
        at tech companies including:
      </p>
     <FaApple className='icon'/>
     <FaGoogle className="icon"></FaGoogle>
     <FaMicrosoft className="icon"></FaMicrosoft>
     <FaSpotify className="icon"></FaSpotify>
     <FaAmazon className="icon"></FaAmazon>
    </div>
  );
}
export default Home;
