import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Specialized, efficient, <br /> and thorough fashion AI services.
          </h1>
          <p>
            We provide performing fashion AI tasks using the least amount of
            time, energy, and money.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Start Now</button>
            <button className="btn-outline">View all Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
