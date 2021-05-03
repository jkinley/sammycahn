import React from "react";
import '../styles/global.css';
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import './layout.scss';

const Layout = ({ children }) => {
  
  const { site:{info:{ title, copyright }} } = useStaticQuery(getData);

  return (
    <div className="page-wrapper">
      <Header siteTitle={title} />
      <main>
          {children}
      </main>
      <Footer copyright={copyright} />
    </div>
  )
}

const getData = graphql`
{
  site {
    info:siteMetadata {
      copyright
      title
    }
  }
}
`;

export default Layout;