import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slider from '../assets/images/slider-img.png';

class HeroSlider extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <>
             <section className="slider_section">
      <div className="slider_container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner"></div>
                <Swiper className="mySwiper">
                    <SwiperSlide>
                        <div className="carousel-item active">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1>
                                                Welcome To Our <br/>
                                                    Gift Shop
                                            </h1>
                                            <p>
                                                Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                                            </p>
                                            <Link to="">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ">
                                        <div className="img-box">
                                            <img src={slider} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-item active">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1>
                                                Welcome To Our <br/>
                                                    Gift Shop
                                            </h1>
                                            <p>
                                                Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                                            </p>
                                            <Link to="/ContactUs">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ">
                                        <div className="img-box">
                                            <img src={slider} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="carousel-item active">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1>
                                                Welcome To Our <br/>
                                                    Gift Shop
                                            </h1>
                                            <p>
                                                Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                                            </p>
                                            <Link to="/ContactUs">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ">
                                        <div className="img-box">
                                            <img src="images/slider-img.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
            </section>
            </>
        )
    }
}

export default HeroSlider;