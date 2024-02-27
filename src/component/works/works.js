import React from "react";
import './works.css';
import Portfolio1 from '../assets/po6.jpg';
import Portfolio2 from '../assets/po6.jpg';
import Portfolio3 from '../assets/po6.jpg';
import Portfolio4 from '../assets/po6.jpg';
import Portfolio5 from '../assets/po6.jpg';
import Portfolio6 from '../assets/po6.jpg';
const Works =()=>{
    return(
            <section id="works">
                <h2 className="workText">My Portfolio</h2>
                <span className="workDesc">I take my pride in paying Attention to the smllest detail maing sure that my in pixel perfect.I am exiiting skills to help businees and achive their goalsand crate a storng onlne process.</span>
                <div className="workImgs">
                    <img src={Portfolio1}className="workImg"></img>
                    <img src={Portfolio2}className="workImg"/>
                    <img src={Portfolio3}className="workImg"></img>
                    <img src={Portfolio4}className="workImg"></img>
                    <img src={Portfolio5}className="workImg"></img>
                    <img src={Portfolio6}className="workImg"></img>
                </div>
                <button className="workBtn">See More</button>
            </section>
    )   
}
export default Works;