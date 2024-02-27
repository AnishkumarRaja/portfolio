import React from "react";
import './skill.css';
import uiDesign from '../assets/ui.png';
import paintDesign from '../assets/re.png'
import appDesign from '../assets/app.png'

const Skill =()=>{
    return(
           <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a Passionate web designer with fresher creating visually appealing andd user-friendly websites.I have a strong undersanding and design an keen eye for deatils. I am proficient in Html,Css,Javascript,as well as design software Developer.</span>
            <div className="skillBar">
                <img src={uiDesign} className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>Ui/Ux Design</h2>
                    <p>This is a demo text,you can write your own contact here.</p>
                </div>

            </div>
            <div className="skillBar">
                <img src={paintDesign} className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is a demo text,you can write your own contact here.</p>
                </div>

            </div>
            <div className="skillBar">
                <img src={appDesign} className="skillBarImg"></img>
                <div className="skillBarText">
                    <h2>AppDesign</h2>
                    <p>This is a demo text,you can write your own contact here.</p>
                </div>
            </div>
           </section>
    )   
}
export default Skill;