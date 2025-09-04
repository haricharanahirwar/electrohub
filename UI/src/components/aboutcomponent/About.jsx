import './About.css';

function About() {
  return (
    <div className="about-us py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">About ElectroHub</h2>
        <p className="lead mb-5">
          At ElectroHub, we are committed to providing the latest electronic products and solutions. Our mission focuses on quality, innovation, and customer satisfaction.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="assets/images/harri-image.jpg" className="card-img-top" alt="Founder" />
              <div className="card-body">
                <h5 className="card-title">Harry Rathore</h5>
                <p className="card-text">CEO</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="assets/images/dhiraj.jpg" className="card-img-top" alt="CTO" />
              <div className="card-body">
                <h5 className="card-title">Dhiraj</h5>
                <p className="card-text">CTO</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="assets/images/junaid1.jpg" className="card-img-top" alt="Founder" />
              <div className="card-body">
                <h5 className="card-title">Junaid</h5>
                <p className="card-text">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
