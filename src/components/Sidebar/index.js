import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/RL-portfolio.png'
import LogoSubtitle from '../../assets/images/name-portfolio.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="rogerliu"/>

        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>

            
        </nav>

        <ul>
            <li>
                <a traget="_blank" rel="noreferrer" href="https://www.linkedin.com/in/roger-liu-rgl72">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a traget="_blank" rel="noreferrer" href="https://github.com/liu-roger">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a traget="_blank" rel="noreferrer" href="https://twitter.com/_rogerliu">
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
    
)

export default Sidebar