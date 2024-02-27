import React from "react";
import './intro.css';
import btnImg from '../assets/cam.png';
import bg from '../assets/man.png';
import {Link} from 'react-scroll';
const Intro =()=>{
    return(
            <section id="intro">
               <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm<span className="introName"> Anish</span><br/>Website Designer</span>
                <p className="intropara">I am a skilled web designer for fresher in creating <br/>visually appealing and user friendly websites.</p>
                <Link><button className="btn"><img src={btnImg} className="btnImg"></img>Hire Me</button></Link>
               </div>
               <img src={bg} className="bg"></img>
            </section>
            
    )   
}
export default Intro;