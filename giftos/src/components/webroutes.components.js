import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import ProductsPage from '../pages/products';
import NewProductPage from '../pages/create-product';
// import LoginPage from '../pages/login';
// import ProfilePage from '../pages/profile';
// import LogoutPage from '../pages/logout';
// import NewPostPage from '../pages/newpost';

const routes = [
    {
        page: <HomePage/>,
        link: '/'
    },
    {
        page: <HomePage/>,
        link: '/home'
    },
    {
        page: <ProductsPage/>,
        link: '/products'
    },
    {
        page: <NewProductPage/>,
        link: '/products/create'
    },
    {
        page: <NewProductPage/>,
        link: '/products/edit/'
    },
    {
        page: <NewProductPage/>,
        link: '/products/edit/:id'
    }
    // {
    //     page: <LoginPage/>,
    //     link: '/login'
    // },
    // {
    //     page: <LogoutPage/>,
    //     link: '/logout'
    // },
]

const WebRoutes = () => {
    return(
        <Routes>
            {
                routes.map((a_route, index)=>{
                    return (
                        <Route exact key={index} path={a_route.link} element={a_route.page} />
                    );
                })
            }
        </Routes>
    );
}

export default WebRoutes;