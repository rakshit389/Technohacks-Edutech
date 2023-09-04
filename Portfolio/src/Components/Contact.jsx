import '../CSS/contact.css' 
import { BrowserRouter as Router , Link } from "react-router-dom";
import { MdEmail  } from 'react-icons/md';
import { BsTelephoneFill  } from 'react-icons/bs';
import {  AiFillHome } from 'react-icons/ai';
import { Ref } from 'react';
import { forwardRef } from 'react';

function Contact( props ) 
{

    return( <div className='container' ref={props.contactRef}>
                <h1>Contact Me</h1>
                <div className='contact'>
                    <div className='contact_box'>
                       
                        <h2> <BsTelephoneFill /> Contact Number</h2>
                        <p>91-7302158866</p>
                        <h2> < AiFillHome />  Address</h2> 
                        <p>Dehradun,Uttarakhand</p>
                    </div>
                    <div  className='contact_box'>
                        <h2> < MdEmail/> Email</h2>
                        <Link to="mailto:rakshit.upd@gmail.com">rakshit.upd@gmail.com</Link>
                    </div>
                </div>
       
            </div>
 
    )
}

export default Contact ;