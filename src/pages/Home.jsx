import React from "react"
import Navbar from "../components/navbar.component"
import HeroSlider from "../components/hero-slider.component"
import LatestProducts from "../components/latest-products.components"
import MiddleComponent from "../components/middle-component"
import WhySectionComponent from "../components/why-section.component"
import GiftSectionComponent from "../components/gift-section.component"
import ContactUsComponent from "../components/contact-us.component"
import Testimonial from "../components/tesimonial.component"
import FooterComponent from "../components/footer.component"
import picture1 from '../assets/images/saving-img.png';


class HomePage extends React.Component{

    render(){
        return(
            <>
            <Navbar navid={"home"}/>
            <HeroSlider/>
            <LatestProducts/>
            <MiddleComponent picture={picture1}/>
            <WhySectionComponent/>
            <GiftSectionComponent/> 
            <ContactUsComponent/>
            <Testimonial/>
            <FooterComponent/>
            </>
            
        )
    }
}
export default HomePage