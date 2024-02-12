import React from 'react';
import { Link } from 'react-router-dom';

import WidgetTitle from '../WidgetTitle';

import postImg from '../../assets/image/magazine.jpg';


function PopularPosts() {
    return (
        <div className='popular-posts'>
            <WidgetTitle titleName="Popular Posts"/>

            <div>
                <div className='flex mb-4'>
                    <div className='w-24 h-16'>
                        <Link to="#">
                            <img src={postImg} />
                        </Link>
                    </div>
                    <div className='mx-2'>
                        <Link to="#">
                            <h5 className='font-medium text-base text-second-color hover:text-third-color transition delay-50 ease-out'>Supports custom Navigation Menus</h5>
                        </Link>
                        <p className='text-sm text-third-color'>JANUARY 11, 2016</p>
                    </div>
                </div>
                <div className='flex mb-4'>
                    <div className='w-24 h-16'>
                        <Link to="#">
                            <img src={postImg} />
                        </Link>
                    </div>
                    <div className='mx-2'>
                        <Link to="#">
                            <h5 className='font-medium text-base text-second-color hover:text-third-color transition delay-50 ease-out'>Supports custom Navigation Menus</h5>
                        </Link>
                        <p className='text-sm text-third-color'>JANUARY 11, 2016</p>
                    </div>
                </div>
                <div className='flex mb-4'>
                    <div className='w-24 h-16'>
                        <Link to="#">
                            <img src={postImg} />
                        </Link>
                    </div>
                    <div className='mx-3'>
                        <Link to="#">
                            <h5 className='font-medium text-base text-second-color hover:text-third-color transition delay-50 ease-out'>Supports custom Navigation Menus</h5>
                        </Link>
                        <p className='text-sm text-third-color'>JANUARY 11, 2016</p>
                    </div>
                </div>
                <div className='flex mb-4'>
                    <div className='w-24 h-16'>
                        <Link to="#">
                            <img src={postImg} />
                        </Link>
                    </div>
                    <div className='mx-3'>
                        <Link to="#">
                            <h5 className='font-medium text-base text-second-color hover:text-third-color transition delay-50 ease-out'>Supports custom Navigation Menus</h5>
                        </Link>
                        <p className='text-sm text-third-color'>JANUARY 11, 2016</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularPosts;