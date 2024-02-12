import React from 'react';
import Slider from "react-slick";

import BannerImg from '../../assets/image/travel_blog_2.jpg'

function BannerCarousels() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <header>
            <Slider {...settings}>
                <div>
                    <img src={BannerImg} />
                </div>
                <div>
                    <img src={BannerImg} />
                </div>
                <div>
                    <img src={BannerImg} />
                </div>
            </Slider>
        </header>
    );
}

export default BannerCarousels;