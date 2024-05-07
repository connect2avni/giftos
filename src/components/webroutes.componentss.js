import {Routes,Route} from 'react-router-dom';
import HomePage from '../pages/home';
import ShopPage from '../pages/shop';


const WebRoutes= () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage/>} /> 
            <Route path="/home" element={<HomePage/>} /> 
            <Route path="/shop" element={<ShopPage/>} /> 
        </Routes>


        </>
    )
}

export default WebRoutes;


