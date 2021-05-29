import React from 'react';
import { quotes } from '../constants/quotes';
import styled from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide} from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import '../../src/styles/swiper.css';

SwiperCore.use([Navigation, Pagination]);

const Swipe = () => {
    
    const slides = quotes.map((quote) => {
      return (
        <SwiperSlide key={quote.id}>
          <Blockquote className="">
            <FaQuoteLeft className="text-3xl"/>
            <div>
              <p className="mb-8 text-3xl leading-normal">{quote.text}</p>
              <p className="text-xl author">— {quote.author}</p>
            </div>
            
          </Blockquote>
        </SwiperSlide>
      );
    });

    return (
      <section className="relative bg-brand-gold p-16">
        <div className="container relative mx-auto">
          <Swiper
            className=""
            id="home" 
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
          >
            {slides}
            
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>
    );
};

const Blockquote = styled.blockquote`
	display: grid;
  height: 100%;
  align-content: center;
  justify-content: center;
	grid-gap: 1rem;
	grid-template-columns: auto 1fr;
`;

export default Swipe;