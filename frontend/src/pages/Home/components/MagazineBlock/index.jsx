import React from 'react';
import { Link } from 'react-router-dom';
import WidgetTitle from '../../../../components/WidgetTitle';

import imgBlog from '../../../../assets/image/magazine.jpg'

function MagazineBlock(props) {
    return (
        <div className='block-magazine'>
            <WidgetTitle titleName="Magazine Widget" />

            <div className='grid grid-cols-2 gap-4'>
                <div className="block-magazine__left">
                    <Link to="#">
                        <img src={imgBlog} className='w-100 pb-2' />
                    </Link>
                    <Link to="#">
                        <h3 className='inline text-2xl font-bold text-black-color hover:text-second-color transition ease-in-out delay-50'>Easy to use Theme Options</h3>
                    </Link>
                    <div className='flex text-sm pt-2 font-medium justify-between'>
                        <Link to="#">
                            <p className='inline text-third-color hover:text-second-color transition ease-in-out delay-50'>DECEMBER 17, 2015</p>
                        </Link>
                        <Link to="#">
                            <p className='inline text-third-color hover:text-second-color transition ease-in-out delay-50'>Thomas</p>
                        </Link>
                    </div>
                    <div>
                        <p className='py-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.[…]</p>
                        <Link to="#">
                            <h6 className='inline font-bold text-second-color hover:text-third-color transition ease-in-out delay-50 '>READ MORE</h6>
                        </Link>
                    </div>
                </div>

                <div className='witget-magazine__right'>
                    <div className='flex pb-2'>
                        <Link to="#" className='w-2/5'>
                            <img src={imgBlog} />
                        </Link>
                        <div className='pl-3'>
                            <div><Link to="#"><h5 className='inline text-lg text-black-color hover:text-second-color font-semibold transition ease-in-out delay-50'>Magazine Posts Widgets</h5></Link></div>
                            <div><Link to="#"><p className='inline text-xs text-third-color hover:text-black-color font-semibold transition ease-in-out delay-50'>NOVEMBER 28, 2015</p></Link></div>
                        </div>
                    </div>
                    <div className='flex pb-2'>
                        <Link to="#" className='w-2/5'>
                            <img src={imgBlog} />
                        </Link>
                        <div className='pl-3'>
                            <div><Link to="#"><h5 className='inline text-lg text-black-color hover:text-second-color font-semibold transition ease-in-out delay-50'>Magazine Posts Widgets</h5></Link></div>
                            <div><Link to="#"><p className='inline text-xs text-third-color hover:text-black-color font-semibold transition ease-in-out delay-50'>NOVEMBER 28, 2015</p></Link></div>
                        </div>
                    </div>
                    <div className='flex pb-2'>
                        <Link to="#" className='w-2/5'>
                            <img src={imgBlog} />
                        </Link>
                        <div className='pl-3'>
                            <div><Link to="#"><h5 className='inline text-lg text-black-color hover:text-second-color font-semibold transition ease-in-out delay-50'>Magazine Posts Widgets</h5></Link></div>
                            <div><Link to="#"><p className='inline text-xs text-third-color hover:text-black-color font-semibold transition ease-in-out delay-50'>NOVEMBER 28, 2015</p></Link></div>
                        </div>
                    </div>
                    <div className='flex pb-2'>
                        <Link to="#" className='w-2/5'>
                            <img src={imgBlog} />
                        </Link>
                        <div className='pl-3'>
                            <div><Link to="#"><h5 className='inline text-lg text-black-color hover:text-second-color font-semibold transition ease-in-out delay-50'>Magazine Posts Widgets</h5></Link></div>
                            <div><Link to="#"><p className='inline text-xs text-third-color hover:text-black-color font-semibold transition ease-in-out delay-50'>NOVEMBER 28, 2015</p></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MagazineBlock;