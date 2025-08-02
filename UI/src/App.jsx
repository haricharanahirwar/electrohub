import Navbar from './components/navbarcomponent/Navbar'
import './App.css'
import Contact from './components/contactcomponent/Contact'
import Getbenefit from './components/getbenefitcomponent/Getbenefit'
import Home from './components/homecomponent/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/aboutcomponent/About'
import Service from './components/servicecomponent/Service'
import Register from './components/Registercomponent/Register'
import Login from './components/logincomponent/Login'
import Laptop from './components/categrycomponent/Laptop';
import Phones from './components/categrycomponent/Phones';
import Audio from './components/categrycomponent/Audio';
import Wearables from './components/categrycomponent/Wearables';
import Logout from './components/logoutcomponent/Logout'
import User from './components/usercomponent/User';
import Auth from './components/Authcomponent/Auth'
import Manageusers from './components/manageuserscomponent/Managrusers'
import Admin from './components/admincomponent/Admin'
import Addcategory from './components/Addcategorycomponent/Addcategory'


function App() {


  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/getbenefit" element={<Getbenefit />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Service" element={<Service />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/logout'element={<Logout />}></Route>
        <Route path="/phones"element={<Phones/>}></Route>
        <Route path='/Laptop'element={<Laptop/>}></Route>
        <Route path="/audio"element={<Audio />}></Route>
        <Route path='/wearables'element={<Wearables />}></Route>
        <Route path='/user'element={<User />}></Route>
        <Route path='/auth'element={<Auth />}></Route>
        <Route path='/manageusers'element={<Manageusers />}></Route>
        <Route path='/admin'element={<Admin />}></Route>
        <Route path='/addcategory'element={<Addcategory />}></Route>

      </Routes>

    </>
  )
}

export default App;
