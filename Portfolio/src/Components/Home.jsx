import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Skill from './Skill'
import Contact from './Contact'
import '../CSS/home.css'
import React, { useState, useEffect } from "react"

function Home()
{
    const [text, setText] = useState("")
    const [fullText2, setFullText2] = useState(
    "Web Developer and Machine Learning enthusiast"
    )
    const [fullText1, setFullText1] = useState(
        "A passionate computer science student"
        )
    const [index1, setIndex1] = useState(0)
    const [index2, setIndex2] = useState(fullText2.length+1)
    useEffect(() => {
        if (index1 < fullText1.length) {
          setTimeout(() => {
            setText(text + fullText1[index1])
            setIndex1(index1 + 1)
          }, 150)
        }
        else
        { 
                setTimeout( ()=> {
                    setText( " ");
                    setIndex2(0) ; 
                } , 800) ;
        }
      }, [index1])

      useEffect(() => {
        if (index2 < fullText2.length+1) {
          setTimeout(() => {
            setText(text + fullText2[index2])
            setIndex2(index2 + 1)
          }, 200)
        }
        else
        { 
                setText(" ");
                setIndex1(0) ; 
        }
      }, [index2])

      
    return( <>
                <div className='intro'>
                     <h2>Hii I'm Rakshit Upadhyay</h2>
                     <h3>{text}</h3> 
                </div>
            </>
        )
}

export default Home ;