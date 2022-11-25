import React from "react";
import Layout from "../layouts/layout";
import { Seo } from "../components/seo";
import ContactForm from '../components/contact/contact-form';
import Address from '../components/contact/address';
import PageTitle from '../components/common/page-title';
import Quote from "../components/common/quote";
import { Script } from 'gatsby';


export const Head = () => (
  <Seo title="Contact" />
);

const Contact = () => {
  return (
    <Layout>
  		<PageTitle title="Contact"/>
  		<ContactForm />
      <Address />
      <Quote id={3} />
      <Script src="https://kwesforms.com/v2/kwes-script.js" defer />
    </Layout>
  
  );
};

export default Contact