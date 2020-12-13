import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import '../tailwind.css'
import "./layout.css"

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
