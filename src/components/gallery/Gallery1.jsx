import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Gallery from '@browniebroke/gatsby-image-gallery'
import styled from "@emotion/styled";
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const Gallery1 = () => {

    const {gallery} = useStaticQuery(getGallery);
    
    const images = gallery.edges.map(({node}) => {
        return  (
            {
                ...node.src.childImageSharp,
                caption: <p className="text-xl">{node.caption}</p>
            }
        )
    })

    return (
        <GalleryWrap>
            <div className="container mx-auto px-8 lg:px-24 xl:px-48">
                <Gallery images={images} title="How about that?" />
            </div>
        </GalleryWrap>
    )
}


const GalleryWrap = styled.section`
	padding: 5rem 0;
`

const getGallery = graphql`
{
    gallery: allGallery1Json {
        edges {
            node {
                caption
                src {

                    childImageSharp {
                        thumb: fluid(maxWidth: 300, maxHeight: 300) {
                            ...GatsbyImageSharpFluid
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

export default Gallery1
