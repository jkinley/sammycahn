import React from 'react'
//import styled from 'styled-components';

const Switcher = (props) => {
  return (
    <div className="mb-8 p-4 bg-gray-100 rounded flex items-center justify-between">
      <h2>{props.checked}</h2>

      <div className="text-sm text-gray-400 bg-white border border-gray-300 rounded-md overflow-hidden p-1 shadow-inners">
        
        <label className={`inline-block px-2 py-1 rounded transition-background duration-300 ease-in-out ${props.checked === 'Apple Music' ? 'bg-brand-darkgold text-white' : 'bg-white'}` }>
          <input 
            type="radio"
            className="form-radio focus:ring-0 hidden"
            name="store" 
            value="Apple Music" 
            checked={props.checked === 'Apple Music'}
            onChange={props.handleClick}
          /> Apple
        </label>

        <label className={`inline-block px-2 py-1 rounded transition-background duration-300 ease-in-out ${props.checked === 'Spotify' ? 'bg-brand-darkgold text-white' : 'bg-white'}`}>
          <input type="radio"
            className="form-radio focus:ring-0 hidden"
            name="store" 
            value="Spotify"
            checked={props.checked === 'Spotify'}
            onChange={props.handleClick}
          />
          <span>Spotify</span>
        </label>

      </div>  
    </div>
  )
}

export default Switcher
