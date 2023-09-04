import '../CSS/navbar.css' ;
import React, { useEffect , useRef, useState } from 'react';
import { BrowserRouter as Routes , Link } from "react-router-dom";
import { animateScroll as scroll, scroller } from 'react-scroll';
import {scrollToSkill} from '../javascript/scroll.js' ;
import { AiOutlineMenu , AiOutlineClose ,  AiFillGithub } from 'react-icons/ai'
import {GrLinkedin} from 'react-icons/gr'
import {SiLeetcode} from 'react-icons/si'

function Navbar( props )
{ 
    const[ state , setState ] = useState(0);
    const ref1 = React.createRef() ;
    function handleScroll(ref)
    {
  
        window.scrollTo({
            top:  ref.offsetTop-50 ,
            left: 0,
            behavior: "smooth",
        });
    }
    function func1()
    {
        if( state == 0 ){
            ref1.current.style.height='16rem' ;
            setState(1);
        }
        else{
            ref1.current.style.height='5rem' ;
            setState(0);
        }   
    }
    useEffect( ()=> {
        window.addEventListener( 'scroll' , ()=> {
            if (window.pageYOffset > 500)
            {
                ref1.current.style.background='none' ;
                ref1.current.style.backgroundColor='black' ;
            }
            
        })
    })
    
    return(  <>
                <nav className="navbar" ref={ref1}>
                    <div className='first'>
                        <div className='first_icons'> 
                        <Link to ='https://www.linkedin.com/in/rakshit-upadhyay-9a03731b1/'  target="_blank">< GrLinkedin className='icons' /></Link>
                        <Link to="https://github.com/rakshit389"  target="_blank"><  AiFillGithub className='icons' /></Link>
                        <Link to="https://leetcode.com/Rakshit_Upadhyay45/"  target="_blank">< SiLeetcode className='icons'/> </Link>
                        </div>
                        < AiOutlineMenu id="opennav" onClick={ ()=> { func1(ref1)}}/>
                        
                         
                    </div>
                    <div className="second"  >
                        <Link to="/About"  onClick={ () => {  handleScroll( props.aboutRef.current  ); }} >About</Link>
                        <Link to="/Projects" onClick={ () => {  handleScroll( props.projectRef.current  ); }} >Projects</Link> 
                        <Link  to="/Skill"  onClick={ () => {  handleScroll( props.skillRef.current  ); }} >Skill</Link>
                        <Link to="/Contact" onClick={ () => {  handleScroll( props.contactRef.current  ); }}>Contact</Link>    
                    </div> 
                </nav>
            </>
    )
}

export default Navbar ;