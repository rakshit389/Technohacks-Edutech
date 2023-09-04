import '../CSS/skill.css' 
function Skill( props )
{
    
    return(<>
              <div className="skills" ref={props.skillRef}>
                <h1>Skills</h1>
                <div className='skills_icon'>
                    <div>
                        <img src={require('../assets/mongo.png')} alt='Nodejs' />
                        <h2 className='skills_icon_text'>MongoDB</h2>
                    </div>
                    <div>
                        <img src={require('../assets/express.png')} alt='Nodejs' />
                        <h2>Express</h2>
                    </div>
                    <div>
                        <img src={require('../assets/react.png')} alt='Nodejs' />
                        <h2>React</h2>
                    </div>
                    <div>
                        <img src={require('../assets/nodejs.webp')} alt='Nodejs' />
                        <h2>NodeJs</h2>
                    </div>
                    
                </div>
                <br></br>
                <div className='skills_icon'>
                    <div>
                        <img src={require('../assets/c.png')} alt='Nodejs' />
                        <h2 className='skills_icon_text'>C</h2>
                    </div>
                    <div>
                        <img src={require('../assets/c++.png')} alt='Nodejs' />
                        <h2>C++</h2>
                    </div>
                    <div>
                        <img src={require('../assets/python.avif')} alt='Nodejs' />
                        <h2>Python</h2>
                    </div>
                    <div>
                        <img src={require('../assets/java.png')} alt='Nodejs' />
                        <h2>Java</h2>
                    </div>
                     
                </div>
                
                
             </div>
           </>  
    )
}

export default Skill ;