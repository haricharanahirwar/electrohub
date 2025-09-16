import { useEffect } from "react";
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Logout() {
  const Navigate = useNavigate()
  const location = useLocation()
  // useEffect(()=>{
  //   console.log(location.pathname);

  // },[])
  useEffect(() => {
    swal.fire({
      text: 'Do you want really to logout',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'yes',
      cancelButtonText: 'No',
      confirmButtonColor: "#000000", 
      cancelButtonColor: "#333333",  
      background: "#1a1a1a",         
      color: "#ffffff",              

    })
      .then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("token");
          localStorage.removeItem("email")
          localStorage.removeItem("name");
          localStorage.removeItem("mobile");
          localStorage.removeItem("address");
          localStorage.removeItem("city");
          localStorage.removeItem("role");
          localStorage.removeItem("gender")
          localStorage.removeItem("info")
          Navigate("/login");
        }
        else {
          if (localStorage.getItem("role") == "admin") {
            Navigate("/admin")
          }
          else if (localStorage.getItem("role") == "user") {
            Navigate("/user")
          }
          else {
            Navigate("/")
          }
        }

      })
  }, [location.pathname])
  return (
    <>

    </>
  )
}
export default Logout;