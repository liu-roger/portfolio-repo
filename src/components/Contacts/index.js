import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
    
    const [letterClass, setLetterClass]= useState('text-animate')
    const form = useRef()


    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    let aboutMe = 'Contact Me';
    const aboutMeArr = aboutMe.split('');

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('contact_service_form', 'contact_form', form.current, 'SRyULKJQnYnufVakB')
          .then(
            () => {
              alert('Message has been succesfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Message failed to send, please try again')
            }
          )
      }
    
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={aboutMeArr}
                        idx={15}
                        />
                    </h1>

                    <p>
                        whefuiowehfohwoifuio2whfo2hiuwgiwugfiuhweoufwhioefowehi
                    </p>

                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>

                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>    
                                
                                <li>
                                    <input type="text" name="subject" placeholder="Subject"  required />
                                </li>
                                
                                <li>
                                    <textarea placeholder='Message' name='message' required>

                                    </textarea>
                                </li>

                                <li>
                                    <input type="submit" className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact