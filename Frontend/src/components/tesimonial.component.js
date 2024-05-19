import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
    return (
        <>
            <section class="client_section layout_padding">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2>
                            Testimonial
                        </h2>
                    </div>
                </div>
                <div class="container px-0">
                    <div id="customCarousel2" class="carousel  carousel-fade" data-ride="carousel">
                        <div class="carousel-inner"></div>
                        <Swiper navigation={true} className="mySwiper" modules={[Navigation]}>
                            <SwiperSlide>
                                <div class="carousel-item active">
                                    <div class="box">
                                        <div class="client_info">
                                            <div class="client_name">
                                                <h5>
                                                    Morijorch
                                                </h5>
                                                <h6>
                                                    Default model text
                                                </h6>
                                            </div>
                                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                                        </div>
                                        <p>
                                            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div class="carousel-item active">
                                    <div class="box">
                                        <div class="client_info">
                                            <div class="client_name">
                                                <h5>
                                                    Morijorch
                                                </h5>
                                                <h6>
                                                    Default model text
                                                </h6>
                                            </div>
                                            <i class="fa fa-quote-left" aria-hidden="true"></i>
                                        </div>
                                        <p>
                                            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        {/* <div class="carousel_btn-box">
                            <a class="carousel-control-prev" role="button" data-slide="prev">
                                <i class="fa fa-angle-left" aria-hidden="true"></i>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" role="button" data-slide="next">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                <span class="sr-only">Next</span>
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonial;