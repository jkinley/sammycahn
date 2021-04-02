import React from 'react';
import { quotes } from '../constants/quotes';
import styled from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa'

import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper.scss';
//'swiper/components/navigation/navigation.scss';
//import 'swiper/components/pagination/pagination.scss';
//import 'swiper/components/effect-fade/effect-fade.scss';
import '../../src/styles/swiper.css'

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

const Swipe = () => {
    return (
      <section className="bg-brand-gold py-12 px-8">
        <div className="container mx-auto">
          <Swiper
            autoplay={{delay:7000}}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 32
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32
              }
            }}
          >
            {
              quotes.map((quote) => {
                return (
                  <SwiperSlide key={quote.id} className="bg-brand-lightgold">
                    <Blockquote>
                      <FaQuoteLeft className="icon text-brand-black"/>
                      <div className="mt-3"> 
                        <p className="mb-8 text-xl font-light text-brand-black">{quote.text}</p>
                        <p className="text-right text-brand-black font-semibold">— {quote.author}</p>
                      </div>
                    </Blockquote>   
                </SwiperSlide>
                )
              })
            }
          </Swiper>
          </div>
      </section>
    )
}

const Blockquote = styled.blockquote`
	color: #231f20;
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: auto 1fr;
	align-items: center;
  .icon {
    align-self: flex-start;
    font-size: 3rem;
  }
`

export default Swipe