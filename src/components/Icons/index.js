import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';

function index() {
    return (
        <div className="icon inner-box">
        <a className="icon" href="https://linkedin.com/in/alexreveles11">
        <GrLinkedin style={{color:'white'}} />
        </a> 
        <div>
            <br />
        </div>
        <a className="icon"  href="https://github.com/alexreveles">
        <FaGithub style={{color:'white'}} /> 
        </a>
        </div>
    )
}

export default index;
