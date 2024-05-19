import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
import p3 from '../assets/images/p3.png'
import p4 from '../assets/images/p4.png'
import p5 from '../assets/images/p5.png'
import p6 from '../assets/images/p6.png'
import p7 from '../assets/images/p7.png'
import p8 from '../assets/images/p8.png'
import { Link } from 'react-router-dom';
import ProductCard from './product-card.component'
const LatestProducts = () => {

    return (
        <>
            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Latest Products
                        </h2>
                    </div>
                  
                    <div className="row">
                        <ProductCard picture={p1} name="Ring" price="$200" size="col-sm-6 col-md-4 col-lg-3"/> 
                        <ProductCard picture={p2} name="Watch" price="$300" size="col-sm-6 col-md-4 col-lg-3"/> 
                        <ProductCard picture={p3} name="Teddy" price="$100" size="col-sm-6 col-md-4 col-lg-3"/> 
                        <ProductCard picture={p4} name="Flowers" price="$50" size="col-sm-6 col-md-4 col-lg-3"/> 
                        <ProductCard picture={p5} name="Large Teddy" price="$300" size="col-sm-6 col-md-4 col-lg-3"/> 
                        <ProductCard picture={p6} name="Bouqet" price="$100" size="col-sm-6 col-md-4 col-lg-3"/> 
                        <ProductCard picture={p7} name="Watch" price="$300" size="col-sm-6 col-md-4 col-lg-3"/> 
                        <ProductCard picture={p8} name="Diamond Ring" price="$400" size="col-sm-6 col-md-4 col-lg-3"/> 
                    </div>
                    <div className="btn-box">
                        <Link to="/allProducts">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LatestProducts