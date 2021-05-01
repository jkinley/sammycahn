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
          <Blockquote className="bg-brand-darkgold rounded-md">
            <FaQuoteLeft className="icon"/>
            <div>
              <p className="quote mb-8">{quote.text}</p>
              <p className="author">— {quote.author}</p>
            </div>
            
          </Blockquote>
        </SwiperSlide>
      );
    });

    return (
      <section className="relative bg-brand-gold py-12">
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
        
      </section>
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
	display: grid;
  padding: 2rem;
  align-content: center;
  height: 100%;
	grid-gap: 1rem;
	grid-template-columns: auto 1fr;
  & .icon {
    font-size: 2rem;
  }
  & .quote {
    font-size: 1.1rem;
  }
  & .author {
    font-weight: bold;
  }
`;

export default Swipe;