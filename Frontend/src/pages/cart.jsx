import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar.component";
import p1 from "../assets/images/p1.png";

import FooterComponent from "../components/footer.component";
import ProductCard from "../components/product-card.component";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsInCart: []
    };
    this.setProductsInCart = this.setProductsInCart.bind(this);
  }

  setProductsInCart(products) {
    this.setState({ productsInCart: products });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container my-4">
          <div className="row">
            <div className="col-md-8">
              <CartProducts setProductsInCart={this.setProductsInCart} />
            </div>
            <div className="col-md-4 ml-2 pl-2 border border-right-0 border-top-0 border-bottom-0">
              <CartSummary productsInCart={this.state.productsInCart} />
            </div>
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}
export default CartPage;

// functional component
const CartProducts = ({ setProductsInCart }) => {
  const [productsInCart, setLocalProductsInCart] = useState([]);

  useEffect(() => {
    const products = [
      {
        name: "Ring",
        price: 200,
        image: p1,
      },
      {
        name: "Ring",
        price: 350,
        image: p1,
      },
      {
        name: "Ring",
        price: 200,
        image: p1,
      },
    ];
    setLocalProductsInCart(products);
    setProductsInCart(products);
  }, [setProductsInCart]);

  return (
    <>
      <div className="shop_section layout_padding">
        <div className="container">
          <div className="row">
            {productsInCart.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  picture={product.image}
                  size="col-sm-6 col-md-4 col-lg-4"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const CartSummary = ({ productsInCart = [] }) => {
  const totalPrice = productsInCart.reduce((acc, product) => acc + product.price, 0);

  return (
    <>
      <div className="summary">
        <h3>Cart Summary</h3>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </>
  );
};
