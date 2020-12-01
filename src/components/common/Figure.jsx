// Figure Component
// v 1.0

import React from 'react'

const Figure = ({src, width, alt, caption }) => {
	return (
		<figure className={classes.figure} style={{maxWidth: `${width}`}}>
			<img className={classes.img} src={src} alt={alt} />
			<figcaption className={classes.caption} style={{backgroundColor: "#3a3a3c", opacity: "0.8"}}>{caption}</figcaption>
		</figure>
	)
}

const classes = {
	figure: 'relative mx-auto',
	img: 'w-full',
  caption: 'text-sm text-white absolute bottom-0 left-0 right-0 px-4 py-2',
};

export default Figure
