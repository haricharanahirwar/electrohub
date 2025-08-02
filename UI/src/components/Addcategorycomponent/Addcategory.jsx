import axios from 'axios';
import { useState } from 'react';
import { __categoryapiurl } from "../../API_URL";

function AddCategory() {
    const [file, setFile] = useState("");
    const[Companyname,setCompanyName]=useState("");
    const[description,setDescription]=useState("");
    const [catName , setCatName] = useState("");
    const[price,setPrice]=useState("");
    const [output , setOutput] = useState();
  
    const handleChange=(event)=>{
      setFile(event.target.files[0]);
    };
    
    // const handleSubmit=(event)=>{
    //   event.preventDefault();
    //   var formData = new FormData();
    //   formData.append('catnm', catName);
    //   formData.append('caticon', file);
    //   formData.append("companyname",Companyname);
    //   formData.append("description",description);
    //   formData.append("price",price);
    //   const config = {
    //       'content-type': 'multipart/form-data'
    //   };
    //   axios.post(__categoryapiurl+"save", formData, config).then((response) => {
    //     setCatName("");
    //     setOutput("Category Added Successfully....");
    //   });
    // };

    function handleSubmit(event){
           event.preventDefault();
      var formData = new FormData();
      formData.append('catnm', catName);
      formData.append('caticon', file);
      formData.append("companyname",Companyname);
      formData.append("description",description);
      formData.append("price",price);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(__categoryapiurl+"save", formData, config).then((response) => {
        setCatName("");
        setOutput("Category Added Successfully....");
      }).catch((error)=>{
        console.log(error)
        setOutput("failed")
      })
        console.log("button clicked")
    }
  return (
    <>
    {/* About Start */}
<div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5 align-items-center">
            <div className="col-lg-12">
<h1 className="mb-4">Add Category <span className="text-primary text-uppercase">Here!!!</span></h1>
<p style={{"color":"blue"}} >{output}</p>
<form>
    <div className="form-group">
    <label for="catnm">Category Company Name:</label>
    <input type="text" className="form-control" value={Companyname} onChange={e => setCompanyName(e.target.value)} />
  </div>
  <br/>
  <div className="form-group">
    <label for="catnm">Category Name:</label>
    <input type="text" className="form-control" value={catName} onChange={e => setCatName(e.target.value)} />
  </div>
  <br/>
  <div className="form-group">
    <label for="file">Category Icon:</label>
    <input type="file" className="form-control" onChange={handleChange} />
  </div>
  <br/>
  <div className="form-group">
    <label for="description">Description</label>
    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
  </div>
  <br/>
  <div className="form-group">
    <label for="price">Price:</label>
    <input type="text" className="form-control" value={price} onChange={e => setPrice (e.target.value)} />
  </div>
  <br/>
  <button  type="button" className="btn btn-danger" onClick={handleSubmit}>Add Category</button>
</form>
            </div>
        </div>
    </div>
</div>
{/* About End */}
    </>
  )
}

export default AddCategory;
  

