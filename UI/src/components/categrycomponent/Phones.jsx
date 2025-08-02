

import { Link } from 'react-router-dom';
import './Phones.css'

function Phones() {
  return (

    <div className="container my-4">
      {/* Top Navigation Links */}
      <div className="d-flex justify-content-center gap-4 mb-3">
        <Link to="/phones" className="btn btn-dark">Phones</Link>
        <Link to="/Laptop" className="btn btn-outline-dark">Laptop</Link>
        <Link to="/Audio" className="btn btn-outline-dark">Audio</Link>
        <Link to="/Wearables" className="btn btn-outline-dark">Wearables</Link>
      </div>
      <hr />

      
    </div>
   
  );
}

export default Phones;
