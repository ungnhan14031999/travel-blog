import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../BannerCarousels/BannerCarousels.scss';

import BannerImg from '../../assets/image/travel_blog_2.jpg'

function BannerCarousels() {
    return (
        <div>
            <Carousel data-bs-theme="dark" className='block-carousels' interval={3000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BannerImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BannerImg}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BannerImg}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default BannerCarousels;