import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Gallery from "react-photo-gallery";

const Gallery3 = () => {

    const {gallery} = useStaticQuery(getGallery);

    console.log(gallery)

    const photos = gallery.edges.map(({node}) => {
        return (
            {   
                width: node.width,
                height: node.height,
                caption: node.caption,
                src: node.src.childImageSharp.thumb.src
            }
        )
    })

    console.log(photos)

    return (
        <div>
            <h1>Test</h1> 
            <Gallery photos={photos} />
            
        </div>
    )
}


const getGallery = graphql`
{
    gallery:allGallery1Json {
        edges {
            node {
                caption
                width
                height
                src {

                    childImageSharp {
                        thumb: fixed(width: 400) {
                            ...GatsbyImageSharpFixed
                        }
                        full: fluid(maxWidth: 1024) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                
                }
            }
        }
    }
}
`

export default Gallery3
