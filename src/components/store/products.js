import React from 'react'
//import styled from 'styled-components';
import { products } from '../../constants/products';
//import amazonButton from '../../images/amazon-button.png'

const Products = () => {
  return (
    <section>
      <div className="container mx-auto px-8 py-16">
        <ul className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          { 
            products.map((item, index) => {
              return (
                <li className="flex flex-col border p-4" key={index}>
                  <img className="mb-4 mx-auto" src={item.image.default} alt=""/>
                  <h3 className="font-semibold text-sm leading-snug">{item.name}</h3>
                  <a className="text-blue-500" href={item.url} target="_blank" rel="noopener noreferrer">
                    Available on Amazon
						      </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Products
