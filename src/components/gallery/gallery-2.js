import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Gallery from '@browniebroke/gatsby-image-gallery'

const Gallery2 = () => {
  const {gallery} = useStaticQuery(getGallery);
  
  const images = gallery.edges.map(({node}) => ({
    ...node.src.childImageSharp,
    caption: <p className="text-xl">{node.caption}</p>
  }));

  return (
    <section className="py-16">
        <div className="container mx-auto px-8">
          <Gallery images={images} title="Gallery 2"/>
        </div>
    </section>
  )
}

const getGallery = graphql`
query images2 {
  gallery: allGallery2Json {
    edges {
      node {
        caption
        src {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;

export default Gallery2;
