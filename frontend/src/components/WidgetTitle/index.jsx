import React from 'react';
import { Link } from 'react-router-dom';

function WidgetTitle(props) {
    const titleName = props.titleName;
    
    return (
        <div className='my-3'>
            <Link 
                to={titleName} 
                className="font-bold text-xl text-black-color hover:text-second-color transition delay-80 relative after:absolute after:content-[''] after:w-full after:h-1 after:bg-cushion-color after:bottom-[-6px] after:left-[0px]"
            >
                    {titleName}
            </Link>
        </div>
    );
}

export default WidgetTitle;