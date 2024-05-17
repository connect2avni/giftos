import React from "react"
import Navbar from "../components/navbar.component"
import FooterComponent from "../components/footer.component"
import ContactUsComponent from "../components/contact-us.component"
class ContactUsPage extends React.Component{

    render(){
        return(
            <>
            <Navbar navid={"contactus"}/>
            <ContactUsComponent/>
            <FooterComponent/>
            </>
        )
    }
}
export default ContactUsPage