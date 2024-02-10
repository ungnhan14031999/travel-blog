import React from 'react';
import BannerCarousels from '../../components/BannerCarousels';
import WidgetTitle from '../../components/WidgetTitle';

function Home() {
    return (
        <div>
            <BannerCarousels />
            
            <div className='container'>
                <div className="row">
                    <div className="col-8">
                        <div className="witget-magazine">
                            <WidgetTitle titleName="Magazine Widget" />
                            <div className="row">
                                <div className="col-4">
                                    <div className="witget-magazine__left">
                                        content left
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="witget-magazine__right">
                                        content-right
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <WidgetTitle titleName="Stay in Touch" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;