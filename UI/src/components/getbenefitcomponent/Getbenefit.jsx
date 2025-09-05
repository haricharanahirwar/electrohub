
import "./Getbenefit.css";

function Getbenefit() {
  return (
    <section className="benefit-section container py-4">
      {/* 🔹 First Row */}
      <div className="row text-center gy-2">
        <div className="col-12 col-sm-6 col-md-3">
          <a className="btn btn-outline-primary w-100">Exchange Program</a>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <a className="btn btn-outline-primary w-100">Celebration Game</a>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <a className="btn btn-outline-primary w-100">Waterproof Phones</a>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <a className="btn btn-outline-primary w-100">More Benefits</a>
        </div>
      </div>

      {/* 🔹 Second Row */}
      <div className="row align-items-center bg-white shadow rounded mt-4 p-3">
        <div className="col-12 col-md-8 text-center text-md-start">
          <h2 className="h4 mb-2">Official Xchange Program</h2>
          <p className="mb-0">Enjoy Up to ₹3000 Exchange Bonus</p>
        </div>
        <div className="col-12 col-md-4 text-center mt-3 mt-md-0">
          <button className="btn btn-primary w-100 w-md-auto" id="Exchange-Now">
            Exchange Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Getbenefit;
