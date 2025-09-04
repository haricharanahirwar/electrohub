import "./Getbenefit.css";

function Getbenefit() {
  return (
    <section className="benefit-section">
      {/* 🔹 First Row */}
      <div className="hero-options">
        <a>Exchange Program</a>
        <a>Celebration Game</a>
        <a>Waterproof Phones</a>
        <a>More Benefits</a>
      </div>

      {/* 🔹 Second Row */}
      <div className="second-hero-option">
        <div className="benefit-text">
          <h2>Official Xchange Program</h2>
          <p>Enjoy Up to ₹3000 Exchange Bonus</p>
        </div>
        <button id="Exchange-Now">Exchange Now</button>
      </div>
    </section>
  );
}

export default Getbenefit;
