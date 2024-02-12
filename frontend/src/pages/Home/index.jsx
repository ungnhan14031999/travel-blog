import React from 'react';
import BannerCarousels from '../../components/BannerCarousels';
import BlockMagazine from './components/MagazineBlock';
import Commuticate from '../../components/Communicate'
import PopularPosts from '../../components/PopularPosts';

function Home() {
    return (
        <div>
            <BannerCarousels />

            <div className='container mx-auto'>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2'>
                        <BlockMagazine/>
                    </div>


                    <div>
                        <div><Commuticate /></div>
                        <div className='mt-10'><PopularPosts /></div>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Home;