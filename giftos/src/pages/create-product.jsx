import React, { useState } from "react";  
import Sidebar from "../components/sidebar.component";
import Header from "../components/header.component";

const NewProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: "",
    reviews: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", product);
    // Add your form submission logic here, such as an API call
  };

  return (
    <>
      {/* <WebHead headInsiders={this.headInsiders} /> */}
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar styles="col-md-3 bg-light col-lg-2" selected="products" />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main">
            <h4 className="my-4">Add new Product</h4>
            <div className="task-posts-container row"></div>
            <div className="container">
              {/* <h2>Add New Product</h2> */}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Product Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Product Category</label>
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Product Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Product Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="image"
                    value={product.image}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Product Reviews</label>
                  <textarea
                    className="form-control"
                    name="reviews"
                    value={product.reviews}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default NewProductPage;
