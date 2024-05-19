import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import gift from '../assets/images/gifts.png'

const GiftSectionComponent= ()=> {
    return(
        <>
        <section class="gift_section layout_padding-bottom">
    <div class="box ">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5">
            <div class="img_container">
              <div class="img-box">
                <img src={gift} alt=""/>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="detail-box">
              <div class="heading_container">
                <h2>
                  Gifts for your <br/>
                  loved ones
                </h2>
              </div>
              <p>
                Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?
              </p>
              <div class="btn-box">
                <Link to="#" class="btn1">
                  Buy Now
                </Link>
                <Link to="" class="btn2">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

        </>
    );
}
export default GiftSectionComponent