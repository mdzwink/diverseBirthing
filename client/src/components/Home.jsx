import { Link } from "react-router-dom";

const Home = (props) => {
  const { language } = props;
  return (
    <section className="home-filter" >
      <div className="family-planning-selector">
        <Link to={'/family-planning'}><div>Family Planning</div></Link>
      </div>
      <div className="expecting-selector">
        <Link to={'/expecting'}>
          <div>Expecting</div>
        </Link>
      </div>
      <div className="healthcare-professional-selector">
        <Link to={'/healthcare-professional'}>
          <div>Healthcare Professional</div>
        </Link>
      </div>
    </section>
  )
}

export default Home;