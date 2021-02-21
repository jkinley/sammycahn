import React from "react"
import '../styles/global.css'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {
  
    const { site:{info:{ title, copyright }} } = useStaticQuery(getData);

    return (
        <div className="flex flex-col h-screen">
            <Header siteTitle={title} />
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <Footer copyright={copyright} />
        </div>
    )
}

/* Query */

const getData = graphql`
{
    site {
        info:siteMetadata {
            copyright
            title
        }
    }
}
`
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
