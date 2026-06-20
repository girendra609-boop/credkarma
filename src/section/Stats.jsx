import "./Stats.css";

const statsData = [
  {
    value: "48,200+",
    label: "Volunteer Hours  Delivered",
  },
  {
    value: "9,800+",
    label: "Families Supported",
  },
  {
    value: "12,400+",
    label: "Active Volunteers",
  },
  {
    value: "340+",
    label: "CSR Projects Executed",
  },
  {
    value: "62+",
    label: "Cities Covered",
  },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container stats-local-container">
        {statsData.map((item, index) => (
          <div key={index} className="stat-card">
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
