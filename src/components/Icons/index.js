import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';

function index() {
    return (
        <div className="icon inner-box">
        <a className="icon" href="https://linkedin.com/in/alexreveles11" target="_blank">
        <GrLinkedin style={{color:'white'}} />
        </a> 
        <div>
            <br />
        </div>
        <a className="icon"  href="https://github.com/alexreveles" target="_blank">
        <FaGithub style={{color:'white'}} /> 
        </a>

        <a className="icon" href="mailto:alexreveles@yahoo.com" target="_blank">
            <HiOutlineMail style={{color:'white'}}/>
        </a>
        </div>


    
     
    
    
    
    

        

        
    );
}

export default index;


