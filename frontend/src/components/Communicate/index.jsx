import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons' 

import WidgetTitle from '../../components/WidgetTitle';

function Communicate() {
    return (
        <div className='communicate-block'>
            <WidgetTitle titleName="Magazine Widget" />

            <div className='d-flex'>
                <Link to="#">
                    <div className='mr-1 w-12 h-12 bg-second-color d-flex items-center justify-content-center hover:bg-third-color transition delay-100'>
                        <FontAwesomeIcon icon={faFacebook} className='text-first-color text-2xl' /> 
                    </div>
                </Link>
                <Link to="#">
                    <div className='mr-1 w-12 h-12 bg-second-color d-flex items-center justify-content-center hover:bg-third-color transition delay-100'>
                        <FontAwesomeIcon icon={faTwitter} className='text-first-color text-2xl' />
                    </div>
                </Link>
                <Link to="">
                    <div className='mr-1 w-12 h-12 bg-second-color d-flex items-center justify-content-center hover:bg-third-color transition delay-100'>
                        <FontAwesomeIcon icon={faInstagram} className='text-first-color text-2xl' />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Communicate;