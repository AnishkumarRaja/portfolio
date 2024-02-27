import Intro from "./component/Intro/intro";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";
import Navbar from "./component/navbar/navbar";
import Skill from "./component/skills/skill";
import Works from "./component/works/works";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Skill/>
    <Works/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
