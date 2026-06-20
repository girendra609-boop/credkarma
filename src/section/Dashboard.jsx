import "./Dashboard.css";
import dashboard from "../assets/dashboard.png";

function Dashboard() {
  return (
    <section className="dashboard-impact-dashboard">
      <div className="dashboard-impact-inner dashboard-container">

        <div className="dashboard-impact-left">
          <div className="dashboard-impact-label">LIVE IMPACT</div>
          <h2>Impact Dashboard</h2>

          <div className="dashboard-impact-grid">

            <div className="dashboard-impact-card">
              <h3>1.2M+</h3>
              <p>TOTAL VOLUNTEER HOURS</p>
            </div>

            <div className="dashboard-impact-card">
              <h3>9,400+</h3>
              <p>NUMBER OF VOLUNTEERS</p>
            </div>

            <div className="dashboard-impact-card">
              <h3>340</h3>
              <p>PROJECTS COMPLETED</p>
            </div>

            <div className="dashboard-impact-card">
              <h3>18,200+</h3>
              <p>FAMILIES IMPACTED</p>
            </div>

            <div className="dashboard-impact-card dashboard-impact-card--wide">
              <h3>12 SDGs</h3>
              <p>SDG CONTRIBUTION</p>
            </div>

          </div>

        </div>

        <div className="dashboard-impact-right">
          <div className="dashboard-impact-image-wrap">
            <img src={dashboard} alt="Impact map" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Dashboard;