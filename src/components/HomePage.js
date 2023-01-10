import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./HomePage.css";

export default function HomePage() {

  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light headbar">
        <Link className="navbar-brand logo" to="#">Clapingo</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav bar">
            <li className="nav-item active">
              <Link className="nav-link" to="#">Plans & Pricing<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Teach With Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Affiliate Program</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Kids</Link>
            </li>
          </ul>
          <button onClick={loginHandler} className="btn" type="button"><i class="fa-solid fa-user"></i><span>Login</span></button>

        </div>
      </nav>

      <div className="second">
        <div className="d-flex flex-row text-black home">
          <div className="d-flex flex-row homedetails">
            <div className="d-flex flex-column heading">
              <h1>Hone your english</h1><br />
              <h1>speaking skills over</h1><br />
              <h1><span>one-on-one </span>video call</h1>
              <p>Practice english conversation with excellent communicators<br />across the country and speak like a PRO 😎.
              </p>
              <div className="button">
                <Link to="#" className="btn button1" role="button" aria-pressed="true">Book a trial</Link>
                <Link to="#" className="btn button2" role="button" aria-pressed="true">Download our app</Link>
              </div>
            </div>
            <svg width="480" height="220"></svg>
          </div>
        </div>
      </div>

      <div className="container third">
        <div className="container">
          <div className="row thirdrow">
            <div className="col-9 colmn">
              <div className="container">
                <div className="row">
                  <div className="col-3 col1">
                    <div className="counter">
                      <h2>50K<span>+</span></h2>
                      <p className="count-text ">Mobile Downloads</p>
                    </div>
                  </div>
                  <div className="col-3 col1">
                    <div className="counter">
                      <h2>80K<span>+</span></h2>
                      <p className="count-text ">Our Happy Learners</p>
                    </div>
                  </div>

                  <div className="w-100"></div>
                  <div className="col-3 col2">
                    <div className="counter">
                      <h2>53K<span>+</span></h2>
                      <p className="count-text ">Sessions per month</p>
                    </div>
                  </div>
                  <div className="col-3 col2">
                    <div className="counter">
                      <h2>200K<span>+</span></h2>
                      <p className="count-text ">Speakers around the globe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 trial">
          <span>Book a trial</span>
          <h2>Start your English<br />speaking journer today!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
            enim ad minimquis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <div className="button">
            <Link href="#" className="btn button1" role="button" aria-pressed="true">Book a trial</Link>
          </div>
        </div>
      </div>

      <div className="heading1">
        <h2>What we offer?</h2>
      </div>
      <div className="card-group cardsec">
        <div className="card card1">
          <img src="https://images.unsplash.com/photo-1601097874965-f940d4f012b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" className="card-img-top" alt="..." />
          <div className="carddetail">
            <h5>Customised Curriculum</h5>
            <p>Customised sessions and module for basic, Intermediate and Advanced learners.</p>
          </div>
        </div>
        <div className="card card2">
          <img src="https://images.unsplash.com/photo-1534357808625-fdbecdd0b6da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" className="card-img-top" alt="..." />
          <div className="carddetail">
            <h5>Experimental Learning</h5>
            <p>Do not study English, rather consume and use it.</p>
          </div>
        </div>
        <div className="card card3">
          <img src="https://images.unsplash.com/photo-1616769364512-1e50e8266907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80" className="card-img-top" alt="..." />
          <div className="carddetail">
            <h5>Shadowing Method</h5>
            <p>Think and speak in English rather than translating if from mother tongue.</p>
          </div>
        </div>
      </div>


    </>
  )
}
