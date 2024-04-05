import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from 'react-router-dom';
import Services from "./Services";
export default function ContactMe() {
  
    return (
      <>
      <Hero hero='roomsHero'>
        <Banner title='Booking Page'>
          <Link to='/'>
            <button className='btn-primary'>Return Home </button>
          </Link>
        </Banner>
      </Hero>
      <section id="Contact" className="contact--section">
        <div>
          <h2>Feel The Details</h2>
        </div>
        <form className="contact--form--container">
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">Check-In Date</span>
              <input
                type="date"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">Check-Out Date</span>
              <input
                type="date"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
          </div>
          <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">Choose The Room</span>
            <select id="choose-topic" className="contact--input text-md">
              <option>Signle Economy</option>
              <option>Double Economy</option>
              <option>Family Delux</option>
              <option>Presidential</option>
            </select>
          </label>
          
          <label htmlFor="checkboc" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn" id="bkbtn">Book Now</button>
          </div>
        </form>
      </section>
      <Services/>
      </>
    );
  }