import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    
    const [letterClass, setLetterClass]= useState('text-animate')

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
    
    
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={aboutMeArr}
                        idx={15}
                        />
                    </h1>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact