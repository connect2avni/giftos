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
import LoginPage from "./login"


class HomePage extends React.Component{

    render(){
        return(
            <>
            <Navbar/>
            <HeroSlider/>
            <LatestProducts/>
            <MiddleComponent/>
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