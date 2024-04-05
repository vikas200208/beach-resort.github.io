import "./AboutUsStyles.css";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from 'react-router-dom'
import Services from "./Services";
function AboutUs() {
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='About Us'>
          <Link to='/'>
            <button className='btn-primary'>Return Home </button>
          </Link>
        </Banner>
      </Hero>
      <div className="about-container">
        <h1>Our History</h1>
        <p>
        <span>Beach Resort</span> is owned and managed by <span>Aditya Gunale Pvt. Ltd.</span> a leading brand in web designing services and e-commerce solutions. Aditya Gunale .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Aditya Gunale is a live paradigm of our work excellence.
        </p>

        <h1>Our Mission</h1>
        <p>
          Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness.
        </p>

        <h1>Our Vision</h1>
        <p>
          To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients.
        </p>
      </div>
      <Services/>
    </>
  );
}

export default AboutUs;
