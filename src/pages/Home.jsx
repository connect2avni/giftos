import React from "react"
import Navbar from "../components/navbar.component"
import HeroSlider from "../components/hero-slider.component"
import LatestProducts from "../components/latest-products.components"


class HomePage extends React.Component{

    render(){
        return(
            <>
            <Navbar/>
            <HeroSlider/>
            <LatestProducts/>

            </>
        )
    }
}
export default HomePage