import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faMapLocationDot, faLanguage, faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Footer = (props) => {
  const { setLanguagePage } = props;

  const navigate = useNavigate();

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
          <li className='nav' onClick={() => navigate('/map')} >Map&nbsp;<FontAwesomeIcon icon={faMapLocationDot} /></li>
          <li className='nav' onClick={() => navigate('/about')} >About&nbsp;<FontAwesomeIcon icon={faPeopleGroup} /></li>
          <li className='nav' onClick={() => setLanguagePage(true)} >Language&nbsp;<FontAwesomeIcon icon={faLanguage} /></li>
          <li>Contact us at:&nbsp;<FontAwesomeIcon icon={faEnvelope} /> <strong>birthingdiversity@gmail.com</strong></li>
        </ul>
      </div>
    </section>
  )
}

export default Footer;