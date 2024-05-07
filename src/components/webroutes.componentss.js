import {Routes,Route} from 'react-router-dom'
import HomePage from '../pages/Home';
import AboutPage from '../pages/about';


const WebRoutes= () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<HomePage/>} /> 
            <Route path="/home" element={<HomePage/>} /> 
            <Route path="/about" element={<AboutPage/>} /> 
        </Routes>


        </>
    )
}

export default WebRoutes;


