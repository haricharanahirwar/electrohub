import Contact from "../contactcomponent/Contact";
import Getbenefit from "../getbenefitcomponent/Getbenefit";
import Slider from "../slidercomponent/Slider";
import Footer from '../footercomponent/Footer'
import About from "../aboutcomponent/About";
import Service from "../servicecomponent/Service";


function Home(){
    return(
        <>
       <Slider />
       <Contact />
       <Getbenefit />
       <About />
       <Service />
       <Footer />
    
        </>
    )
}
export default Home;