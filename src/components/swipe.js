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
          <Blockquote className="p-8">
            <FaQuoteLeft className="text-2xl"/>
            <div>
              <p className="mb-8 text-xl leading-normal">{quote.text}</p>
              <p className="author">— {quote.author}</p>
            </div>
          </Blockquote>
        </SwiperSlide>
      );
    });

    return (
      <section className="bg-brand-gold p-4">
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
            autoHeight={true}
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
	grid-gap: 1rem;
	grid-template-columns: auto 1fr;
`;

export default Swipe;