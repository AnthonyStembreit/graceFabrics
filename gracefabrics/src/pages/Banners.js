import React from 'react';
import Carousel from '../components/carousel';
import FilterProducts from '../filterProducts';

export default function Banners(){
    return(
        <div>
            {Carousel}
            This is the Banners page
            (Will add filter for banners)
            <FilterProducts />
        </div>
    )
}
