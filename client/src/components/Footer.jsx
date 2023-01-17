import { useNavigate } from 'react-router-dom';

const Footer = (props) => {
  const { setLanguagePage } = props;

  const navigate = useNavigate();

  return (
    <section className="footer">
      <div onClick={() => navigate('/our-team')}>Our Team</div>
      <div onClick={() => setLanguagePage(true)}>Select a language</div>
      <div onClick={() => navigate('/map')} >Map</div>
    </section>
  )
}

export default Footer;