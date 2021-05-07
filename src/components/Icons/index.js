import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';

function index() {
    return (
        <div className="icon">
        <a className="icon" href="https://www.linkedin.com/mynetwork/">
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
