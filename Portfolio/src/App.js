import React , {useRef , ref }   from 'react';
import './file.css' ;
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Skill from './Components/Skill'
import Contact from './Components/Contact'
import { animateScroll as scroll, scroller } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { useEffect } from 'react';

function App()
{
      const aboutRef = React.createRef();  
      const contactRef =  React.createRef(); 
      const skillRef = React.createRef();  
      const projectRef =  React.createRef(); 

      return( <>
                   <Router>
                        < Navbar aboutRef={aboutRef} projectRef={projectRef} skillRef={skillRef} contactRef={contactRef} />
                        < Home  />
                        < About aboutRef={aboutRef}/>
                        < Projects projectRef={projectRef}/>
                        < Skill   skillRef={skillRef}/>
                        < Contact contactRef={contactRef}  />
                         
                  </Router>
                   
               </> 
                    
            
           
       )
    
 }

export default App ;