import React from 'react';
import BannerCarousels from '../../components/BannerCarousels';
import WidgetTitle from '../../components/WidgetTitle';
import BlockMagazine from './components/MagazineBlock';

function Home() {
    return (
        <div>
            <BannerCarousels />

            <div className='container mx-auto'>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2'>
                        <WidgetTitle titleName="Magazine Widget" />
                        <BlockMagazine/>
                    </div>


                    <div style={{background: 'yellow'}}><WidgetTitle titleName="Magazine Widget" /></div>
                </div>
            </div>    
        </div>
    );
}

export default Home;