import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }


        console.log('errorMessage ' + errorMessage);
    }

    

    return (
        <section className="contact-cont rounded-border section-bkg">
            <div className="row">
                <div className="col-sm">
                    <h1 className="p-3">Contact Me : </h1>
                    <ul className="contact-items">
                        <li className="contact-items">
                            Phone: <a className="contact-link" href="tel:7146154168">(805)816-1118</a>
                        </li>
                        <br/>
                        <br/>
                        <li>
                            Email: <a className="contact-link" href="mailto:alexreveles@yahoo.com" target="_blank">alexreveles@yahoo.com </a>
                        </li>
                        <br/>
                        <br/>
                        <li>
                            LinkedIn: <a className="contact-link" href="https://www.linkedin.com/in/alexreveles11/" target="_blank">LinkedIn Profile</a> 
                        </li>
                        <br/>
                        <br/>
                        <li>
                            GitHub: <a className="contact-link" href="https://github.com/alexreveles" target="_blank">Alex Reveles</a> 
                        </li>
                        <br/>
                        <br/>
                    </ul>
                    
                </div>
            </div>
           
        </section>
    );
}


export default ContactForm;