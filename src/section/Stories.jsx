import "./Stories.css";
import story1 from "../assets/story1.png";
import story2 from "../assets/story2.png";
import story3 from "../assets/story3.png";
import { CiPlay1 } from "react-icons/ci";

function Stories() {
  return (
    <section className="stories stories-local-container">

      <h5>SUCCESS STORIES</h5>

      <h2>Stories of Change</h2>

      <div className="story-grid">

        <article className="story-card">
          <img className="story-image" src={story1} alt="" />
          <div className="story-body">
            <div className="story-tag">VOLUNTEER STORIES</div>
            <h4>How volunteering changed my career</h4>
            <div className="story-pills">
              <span className="pill"><CiPlay1 /> Video</span>
              <span className="pill">Metrics</span>
              <span className="pill">Before/After</span>
            </div>
          </div>
        </article>

        <article className="story-card">
          <img className="story-image" src={story2} alt="" />
          <div className="story-body">
            <div className="story-tag">COMMUNITY STORIES</div>
            <h4>How support transformed our initiative</h4>
            <div className="story-pills">
              <span className="pill"><CiPlay1 /> Video</span>
              <span className="pill">Testimonials</span>
              <span className="pill">Metrics</span>
            </div>
          </div>
        </article>

        <article className="story-card">
          <img className="story-image" src={story3} alt="" />
          <div className="story-body">
            <div className="story-tag">CORPORATE STORIES</div>
            <h4>How CSR became measurable</h4>
            <div className="story-pills">
              <span className="pill"><CiPlay1 /> Video</span>
              <span className="pill">Before/After</span>
              <span className="pill">Metrics</span>
            </div>
          </div>
        </article>

      </div>

    </section>
  );
}

export default Stories;