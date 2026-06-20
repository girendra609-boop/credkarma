import "./Testimonial.css";
import people from "../assets/people.png";

const testimonials = {
  volunteers: [
    { title: "Experience", desc: "Volunteer perspective" },
    { title: "Growth", desc: "Career development" },
    { title: "Recognition", desc: "Community honor" },
  ],
  communities: [
    { title: "Support quality", desc: "NGO perspective" },
    { title: "Execution speed", desc: "Community impact" },
  ],
  corporates: [
    { title: "Transparency", desc: "Corporate partner" },
    { title: "Reporting", desc: "Compliance ready" },
    { title: "Reliability", desc: "Trusted execution" },
  ],
};

function TestimonialColumn({ title, items, tone }) {
  const getIconWrapClass = (tone) => {
    return `testimonial-icon-wrap testimonial-icon-wrap--${tone}`;
  };

  return (
    <div className="testimonial-column">
      <h3 className="testimonial-column-title">{title}</h3>
      <div className="testimonial-column-line" />

      <div className="testimonial-card-list">
        {items.map((item) => (
          <article className="testimonial-card" key={item.title}>
            <div className={getIconWrapClass(tone)}>
              <img src={people} alt="" aria-hidden="true" className="testimonial-icon" />
            </div>

            <h4 className="testimonial-card-title">{item.title}</h4>
            <p className="testimonial-card-desc">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <span className="testimonials-eyebrow">TESTIMONIALS</span>
        <h2 className="testimonials-title">Voices from the Ecosystem</h2>

        <div className="testimonial-grid">
          <TestimonialColumn
            title="Volunteers"
            items={testimonials.volunteers}
            tone="blue"
          />

          <TestimonialColumn
            title="Communities"
            items={testimonials.communities}
            tone="green"
          />

          <TestimonialColumn
            title="Corporates"
            items={testimonials.corporates}
            tone="pink"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

