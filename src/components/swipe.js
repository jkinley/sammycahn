import React from 'react'

import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import '../../src/swiper.css'

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

const Swipe = () => {
    return (
        <Swiper
            autoplay={{delay: 2500}}
            effect="fade"
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="">
                    <h1>Slide 1</h1>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <h1>Slide 2</h1>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <h1>Slide 3</h1>
                    <p>Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                </div>
            </SwiperSlide>
    
        </Swiper>
    )
}

export default Swipe