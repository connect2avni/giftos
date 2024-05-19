import { Link } from "react-router-dom"
const ProductCard = ({ picture, name, price, size }) => {
    return (
        <>
            <div className={size}>
                <div className="box">
                    <Link to="">
                        <div className="img-box">
                            <img src={picture} alt="" />
                        </div>
                        <div className="detail-box">
                            <h6>
                                {name}
                            </h6>
                            <h6>
                                Price
                                <span>
                                    {price}
                                </span>
                            </h6>
                        </div>
                        <div className="new">
                            <span>
                                New
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ProductCard