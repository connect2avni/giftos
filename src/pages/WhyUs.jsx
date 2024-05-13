import React from "react"
import Navbar from "../components/navbar.component"
import WhySectionComponent from "../components/why-section.component"
import FooterComponent from "../components/footer.component"
class WhyUsPage extends React.Component{
    render(){
        return(
            <>
                <Navbar navid={"whyus"}/>
                <WhySectionComponent/>
                <FooterComponent/>


            </>
        )
    }

};
export default WhyUsPage;