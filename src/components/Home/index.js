import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
//import LogoTitle from '../../assets/images/name-portfolio.png';
import './index.scss';




const Home = () => {
    const [letterClass, setLetterClass]= useState('text-animate')
    let name = ' Roger Liu';
    const nameArray = name.split('');
    let jobName = ' jr. web developer.';
    const jobArray = jobName.split('');

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])
    

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H </span> 
                    <span className={`${letterClass} _12`}>i </span>
                    <span className={`${letterClass} _13`}>, </span> 
                    <br/> 
                    <span className={`${letterClass} _14`}>I </span> 
                    <span className={`${letterClass} _15`}>'</span>
                    <span className={`${letterClass} _16`}>m  </span>  
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21}/>
                </h1>

                <h2> Junior Fullstack Web Developer </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
        <Loader type="pacman" />
        </>
        
    );
}

export default Home