import React from 'react';
import '../WidgetTitle/WidgetTitle.scss'

function WidgetTitle(props) {
    const titleName = props.titleName;
    
    return (
        <div className='widget-title'>
            <h3>{titleName}</h3>
        </div>
    );
}

export default WidgetTitle;