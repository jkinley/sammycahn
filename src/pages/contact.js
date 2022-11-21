import React from "react";
import Layout from "../layouts/layout";
import Seo from "../components/seo";
import ContactForm from '../components/contact/contact-form';
import Address from '../components/contact/address';
import PageTitle from '../components/common/page-title';
import Quote from "../components/common/quote";

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    
		<PageTitle title="Contact"/>

		<ContactForm />
 
    <Address />

    <Quote id={3} />

  </Layout>
)



export default Contact