import "./Commitypage.css";
import Navbar from "../section/Navbar";
import Request from "./Request";
import comm1 from "../assets/commitypage1.png";
import comm2 from "../assets/commitypage2.png";
import comm3 from "../assets/commitypage3.png";
import Mob from "./Mob";
import Transform from "./Transform";
import Faq from "./Faq";
import Postrequirement from "./Postrequirement";
import Footer from "../section/Footer"

export default function Commitypage() {
	return (
		<div className="communities-page">
      <div className="hero-wrapper">
			  <Navbar />  
        <section className="community-section commity-local-container">
          <div className="community-left">
            <div className="community-tag">
              • COMMUNITIES PAGE
            </div>

            <h2>
              Raise Your Need.
              <br />
              Build Real <span>Support.</span>
            </h2>

            <p>
              Connect with verified volunteers and corporates
              who are ready to respond.
            </p>

            <button className="community-btn">
              Post Your Requirement
            </button>
          </div>

          <div className="community-right">
            <img src={comm1} alt="Community Support" className="large-img" />

            <div className="bottom-images">
              <img src={comm2} alt="Medical Support" />
              <img src={comm3} alt="Education Support" />
            </div>
          </div>
        </section>
      </div>



			
			<Request />
      <Mob />
      <Transform />
      <Faq />
      <Postrequirement />
      <Footer />
		</div>
	);
}

