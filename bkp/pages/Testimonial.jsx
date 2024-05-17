import React from "react"
import Navbar from "../components/navbar.component"
import FooterComponent from "../components/footer.component"
import Testimonial from "../components/tesimonial.component"


class TestimonialPage extends React.Component{
    render(){
        return(
            <>
                <Navbar navid={"testimonials"}/>
                <Testimonial/>
                <FooterComponent/>
            </>
        )
    }

}
export default TestimonialPage