import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { __userapiurl } from "../../API_URL";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
  
    const userDetails = {
      name:name,
      email:email,
      password:password,
      mobile:mobile,
      address:address,
      gender:gender,
      city:city,
  
    };
       axios.post(__userapiurl+'save', userDetails)
      .then(() => {
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setAddress("");
        setCity("");
        setGender("");
        setOutput("User Registered Successfully");
      })
      .catch(() => {
        setOutput("User Registration Failed");
      });
    
  };
  

  return (
    <div className="container mt-5">
      <div className="col-lg-8 mx-auto shadow p-5 bg-white rounded">
        <h2 className="text-center text-secondary mb-4">Register Here</h2>

        {output && <div className="alert alert-info">{output}</div>}

        <form>
          <div className="form-group mb-3">
            <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group mb-3">
            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group mb-3">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="form-group mb-3">
            <input type="text" className="form-control" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>

          <div className="form-group mb-3">
            <textarea className="form-control" placeholder="Address" rows={3} value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          </div>

          <div className="form-group mb-3">
            <select className="form-control" value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select City</option>
              <optgroup label="Madhya Pradesh">
                <option>Indore</option>
                <option>Bhopal</option>
                <option>Ujjain</option>
              </optgroup>
              <optgroup label="Maharashtra">
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Nasik</option>
              </optgroup>
            </select>
          </div>

          <div className="form-group mb-4">
            <label className="me-2">Gender:</label>
            Male <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} />
            &nbsp;&nbsp;&nbsp;
            Female <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />
          </div>

          <button  className="btn bg-primary text-white w-100" type="button"onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
