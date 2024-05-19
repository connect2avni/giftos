import {Routes,Route} from 'react-router-dom';
import HomePage from '../pages/home';
import ShopPage from '../pages/shop';
import WhyUsPage from '../pages/WhyUs';
import Testimonial from '../pages/Testimonial'
import ContactUsPage from '../pages/ContactUs';
import Login from '../pages/login';
import Signup from '../pages/signup';
import CartPage from '../pages/cart';
import AllProductPage from '../pages/AllProducts';


const WebRoutes= () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage/>} /> 
            <Route path="/home" element={<HomePage/>} /> 
            <Route path="/shop" element={<ShopPage/>} /> 
            <Route path= "/WhyUsPage" element={<WhyUsPage/>}/>
            <Route path="/Testimonial" element={<Testimonial/>}/>
            <Route path="/ContactUs" element= {<ContactUsPage/>}/>
            <Route path="/login" element= {<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/allProducts" element= {<AllProductPage/>}/>


        </Routes>


        </>
    )
}

export default WebRoutes;


