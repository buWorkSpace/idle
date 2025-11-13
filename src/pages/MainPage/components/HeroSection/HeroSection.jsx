import "./HeroSection.css";
import bgImg from "/TopSection.png"; // public 폴더 바로 아래

function HeroSection() {
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h2>Quality fashion AI at a fair price.</h2>
          <h1>
            Specialized, efficient, <br /> and thorough fashion <br /> AI services.
          </h1>
          <p>
            We provide performing fashion AI tasks using the least <br />
            amount of time, energy, and money.
          </p>
          <div className="hero-buttons">
            <button className="M-btn-primary">Get Start Now</button>
            <button className="M-btn-outline">View all Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
