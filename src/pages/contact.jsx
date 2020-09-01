import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ContactForm from '../components/contact/ContactForm'

const contact = () => (
  <Layout>
    <SEO title="Contact | Sammy Cahn" />

		<section className="p-4">
			<div className="container mx-auto">
				<h1 className="text-4xl mb-2">Contact Us</h1>
				<p className="leading-relaxed mb-6">Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod.</p>
			</div>
		</section>

		<section className="p-4">
			<div className="container mx-auto">
			<ContactForm />
			</div>
		</section>
		
  </Layout>
)

export default contact