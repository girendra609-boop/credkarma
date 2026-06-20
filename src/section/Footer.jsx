import "./Footer.css";
import footer from "../assets/footer.png";
import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import footer3 from "../assets/footer3.png";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <div style={{display:"flex",gap:"10px"}}>
          <img  style={{ width: "32px" , height: "32px"}} src={footer} alt="" /> 
          <h3>CredKarma</h3>
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

        <div style={{fontFamily:"DM Sans"}}>
          <span>Privacy Policy</span> |{" "}
          <span>Terms of Use</span> |{" "}
          <span>PDPA Compliance</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;