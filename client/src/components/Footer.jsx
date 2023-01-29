import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faMapLocationDot, faLanguage, faEnvelope, faCopy, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Footer = (props) => {
  const { setLanguagePage } = props;
  const [copyState, setCopyState] = useState(false);
  const [hoverEmailActive, setHoverEmailActive] = useState(false);
  const email = 'birthingdiversity@gmail.com';

  const navigate = useNavigate();
  const handleFootClick = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
  const handleHover = (text) => {
    
  }

  return (
    <section className="footer">
      <div className='footer-ack'>
        <div className='footer-BD'>Birthing <br/> Diversity</div>
        <br/>
        <div className='footer-land-acknowledgment' >Birthing Diversity opperates on the unceded traditional land of the Mississaugas of the Credit, Anishinaabe Nation, I also acknowledge and extend my respect to the Haudenosaunee Six Nations of the Grand River and to the Huron-Wendat Nation.  In addition I acknowledge that the First Nations, Inuit and Metis peoples know this continent's original name to be Turtle Island.</div>
        <br/>
        <div>Website built by: <a href="https://www.mdzwink.com" target='_blank' rel="noreferrer"> Muhammad Zwink <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></div>
      </div>
      <div className='footer-nav'>
        <ul>
          <li className='nav' onClick={() => {navigate('/map'); handleFootClick()}} >Map&nbsp;<FontAwesomeIcon icon={faMapLocationDot} /></li>
          <li className='nav' onClick={() => {navigate('/about'); handleFootClick()}} >About&nbsp;<FontAwesomeIcon icon={faPeopleGroup} /></li>
          <li className='nav' onClick={() => setLanguagePage(true)} >Language&nbsp;<FontAwesomeIcon icon={faLanguage} /></li>
          <li className='contact-us' >
            <div>Contact us at:&nbsp;</div>
            <div>
            <div className='email-client'
              onMouseEnter={() => {handleHover('Click to open email'); setHoverEmailActive(true)}} 
              onMouseLeave={() => {handleHover(''); setHoverEmailActive(false)}} >
                <a href={`mailto:${email}`}><strong>{email}</strong>&nbsp;<FontAwesomeIcon icon={faEnvelope} /></a>
                <div className={hoverEmailActive ? "hover-context active" : 'hover-context'}>Open email<div></div></div>
            </div>
            &nbsp;
            <div className='email-copy'
              onClick={() => {navigator.clipboard.writeText(email); setCopyState('clicked')}} 
              onMouseEnter={() => {handleHover('Click to copy email'); setCopyState('hover')}}  
              onMouseLeave={() => {handleHover(''); setCopyState(false)}} ><FontAwesomeIcon icon={faCopy} />
              <div className={copyState === 'hover' ? 'hover-context active' : 'hover-context'}>Copy email<div></div></div>
              <div className={copyState === 'clicked' ? 'hover-context active' : 'hover-context'}>Email copied!<div></div></div>
            </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer;