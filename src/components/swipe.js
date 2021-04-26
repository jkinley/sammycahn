import React from 'react';
import { quotes } from '../constants/quotes';
import styled from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import '../../src/styles/swiper.css';

SwiperCore.use([Navigation, Pagination]);

const Swipe = () => {
    
    const slides = quotes.map((quote) => {
      return (
        <SwiperSlide key={quote.id}>
          <Blockquote className="bg-brand-darkgold p-4 rounded h-full">
            <FaQuoteLeft className="icon text-brand-black"/>
            <div className="flex flex-col"> 
              <p className="mb-8 text-xl font-light text-brand-black flex-1">{quote.text}</p>
              <p className="text-right text-brand-black font-semibold">— {quote.author}</p>
            </div>
          </Blockquote>      
        </SwiperSlide>
      );
    });

    return (
      <div className="relative border bg-brand-gold py-12">
        <Swiper
          className=""
          id="home" 
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={breakpoints}
        >
          {slides}
          
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        
      </div>
    );
};

const breakpoints = {
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    }
};

const Blockquote = styled.blockquote`
	color: #231f20;
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: auto 1fr;
  .icon {
    align-self: flex-start;
    font-size: 3rem;
  }
`;

export default Swipe;