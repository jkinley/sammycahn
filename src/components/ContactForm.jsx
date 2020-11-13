import React from 'react'

const ContactForm = () => {
	return (

		<form method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
			<div className="mb-6">
				<label className="block text-gray-700 text-md font-bold mb-2" htmlFor="name">Name</label>
				<input id="name" className="border py-2 px-3 text-grey-darkest w-full" placeholder="Joe Bloggs" type="text" name="name" />
			</div>

			<div className="mb-6">
				<label className="block text-gray-700 text-md font-bold mb-2" htmlFor="email">Email Address</label>
				<input id="email" className="border py-2 px-3 text-grey-darkest w-full" placeholder="jbloggs@email.com" type="email" name="email" />
			</div>

			<div className="mb-6">
				<label className="block text-gray-700 text-md font-bold mb-2" htmlFor="message">Message</label>
				<textarea className="border py-2 px-3 text-grey-darkest w-full" id="message" placeholder="Enter your message..." name="message" rows="4"></textarea>
			</div>

			<input type="hidden" name="form-name" value="contact" />
			
			<button className="py-2 px-3 rounded-md font-bold uppercase tracking-wide w-full" type="submit" style={{backgroundColor: '#b09a50'}}>Send Email</button>

		</form>
	)
}

export default ContactForm
