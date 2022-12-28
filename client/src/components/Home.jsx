import { Link } from "react-router-dom";

const Home = (props) => {
  const { language } = props;
  return (
    <section className="home-filter" >
      <Link to={'/family-planning'}>
        <div className="family-planning-selector">
          <div>Family Planning</div>
        </div>
      </Link>
      <Link to={'/expecting'}>
        <div className="expecting-selector">
          <div>Expecting</div>
        </div>
      </Link>
      <Link to={'/healthcare-professional'}>
        <div className="healthcare-professional-selector">
          <div>Healthcare Professional</div>
        </div>
      </Link>
    </section>
  )
}

export default Home;