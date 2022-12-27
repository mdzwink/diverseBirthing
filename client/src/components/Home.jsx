import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-filter" >
      <div className="family-planning">
        <Link to={'/family-planning'}><div>Family Planning</div></Link>
      </div>
      <div className="expecting">
        <div>Expecting</div>
      </div>
      <div className="healthcare-professional">
        <div>Healthcare Professional</div>
      </div>
    </section>
  )
}

export default Home;