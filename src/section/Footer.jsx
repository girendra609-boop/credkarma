import "./Footer.css";
import footer from "../assets/Footer Logo.png";
import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import footer3 from "../assets/footer3.png";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <div className="footer-logo-container">
            <img src={footer} alt="CredKarma Logo" /> 
          </div>
          <p>
           india's Unified impact ecosystem connecting
            communities, volunteers and corporates
            to create measurable change.
          </p> <br /> 
        <div style={{display:"flex",gap:"10px"}}>
          <img  style={{ width: "32px" , height: "32px"}} src={footer1} alt="" />
          <img style={{ width: "32px" , height: "32px"}} src={footer2} alt="" />
          <img  style={{ width: "32px" , height: "32px"}} src={footer3} alt="" />
        </div>
        </div>

        <div className="footer-links">
          <h4>Platform</h4>

          <ul>
            <li>For Volunteers</li>
            <li>For Communities</li>
            <li>For Corporates</li>
            <li>For Donors</li>
            <li>Impact Dashboard</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>

          <ul>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Resources</h4>

          <ul>
            <li>Blog</li>
            <li>Case Studies</li>
            <li>CSR Guide</li>
            <li>NGO Toolkit</li>
            <li>Contact Us</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 CredKarma. All Rights Reserved.
        </p>

        <div  className="footer-bottom-links">
          <span>Privacy Policy</span> &nbsp;
          <span>Terms of Use</span>&nbsp;
          <span>FCRA Compliance</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;