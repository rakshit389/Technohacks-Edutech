import '../CSS/about.css'
import { forwardRef } from 'react';
import {Link} from 'react-router-dom'
function About( props ) 
{
        
            return( <div className='about' ref={props.aboutRef} >
                        <div className="aboutme">
                            <h1>About Me</h1>
                            <p>Hello, this is Rakshit Upadhyay, MERN stack developer, pursuing my Bachelor of technology in Computer Science from Graphic Era Hill University Dehradun.<br></br>
                                I have developed several projects in web developement domain using javascript and it's frameworks like React js , Nodejs.
                                I have done more than 300 problems on different coding plateforms. I am Machine Learning enthusiast , I have done few projets in machine learning domain. <br></br>
                                Apart from that I have team spirit and good problem solving skills.
                            </p>
                            <br></br>
                            <br></br>
                            <Link to="https://drive.google.com/file/d/1tO6UnbNkrT62GPEWE8Z441M9FaXtoz8d/view?usp=sharing" target="_blank"><button>Download Resume</button> </Link>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
            )
}


export default About ;