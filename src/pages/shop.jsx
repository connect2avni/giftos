import React from "react"
import Navbar from "../components/navbar.component"
import LatestProducts from "../components/latest-products.components"
import FooterComponent from "../components/footer.component"

class ShopPage extends React.Component{

    render(){
        return(
            <>
            <Navbar navid={"shop"}/>
            <LatestProducts/>
            <FooterComponent/>
            </>
        )
    }
}
export default ShopPage