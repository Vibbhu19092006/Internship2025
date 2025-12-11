import "../../css/App.css"
import Props from "./Props.jsx";
import State from "./State.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import LearningReact from "./LearningReact.jsx"
import Contact from "./Contact.jsx";
import { Link } from "react-router-dom";

function Navbar(props){
    return(
        <>
            <nav style={{backgroundColor:"black",color:"aqua"}}>
                <ul class="ul" >
                    <Link to="/"><li class="li">Home</li></Link>
                    <Link to="/about"><li class="li">About</li></Link>
                    <Link to="/learn-react"><li class="li">LearningReact</li></Link>
                    <Link to="/contact"><li class="li">Contact.</li></Link>
                    
                   
                </ul>

            </nav>
            <p>The above content is Navbar </p>
        </>
    );
};
export default Navbar;