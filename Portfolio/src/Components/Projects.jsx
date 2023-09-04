import '../CSS/projects.css' 
import Card from 'react-bootstrap/Card';
function Projects( props )
{
    return( <div className='projects' ref={props.projectRef}>
                <h1>Projects</h1>
                <h2>Web Development</h2>
               <div className='project_list'>
                    <div className ="content_image">
                         <img src = {require('../assets/forgot_password_project.png')}/>
                         <div  className='text' ></div>
                         <h2>Forgot Password Feature</h2>
                    </div>
                    <div  className ="content_image">
                         <img src = {require('../assets/food_ordering_website.png')}/>
                         <div  className='text' ></div>
                         <h2>Food Ordering Website</h2>
                    </div>
                    <div  className ="content_image">
                         <img src = {require('../assets/web_chat_project.png')}/>
                         <div className='text'></div>
                         <h2>Web Chat Application</h2>
                    </div>
               </div>
                <h2>Machine Learning</h2>
                <div className='project_list'>
                <div  className ="content_image">
                         <img src = {require('../assets/face_authentication.jpg')}/>          
                         <div className='text'></div>
                         <h2>Face Authentication</h2>
                    </div>
                    <div  className ="content_image">
                         <img src = {require('../assets/credit_card_project.webp')}/>
                         <div className='text'></div>
                         <h2>Credit Card Fraud Detection</h2>
                    </div>
                    
                     
                </div>
            </div>
        )
}

export default Projects