import { useNavigate } from 'react-router-dom';

const Footer = (props) => {
  const { setLanguagePage } = props;

  const navigate = useNavigate();

  return (
    <section className="footer">
      <p className='land-acknowledgment' >Birthing Diversity opperates on the unceeded territory of the Anishinaabe “people of the longhouse” and Haudenosaunee "Six Nations" people on the land know as Turtle Island. (This section is being revised)</p>
      <div className='contact-dev' >
        <p>Contact us at birthingdiversity@gmail.com</p>
        <br></br>
        <p>Website built by <a href="https://www.mdzwink.com" target='_blank' rel="noreferrer">Muhammad Zwink</a> </p>
      </div>
      <div>
        <div onClick={() => navigate('/map')} >Map</div>
        <div onClick={() => navigate('/about')}>About</div>
        <div onClick={() => setLanguagePage(true)}>Change language</div>
      </div>
    </section>
  )
}

export default Footer;