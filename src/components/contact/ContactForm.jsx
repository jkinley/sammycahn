import React from 'react'
import {css} from '@emotion/core'

const ContactForm = () => {
	return (
		<div>
			<form method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
				<div className="mb-6">
					<label 
						className="block text-gray-700 font-bold mb-2" 
						htmlFor="name">Name
					</label>
					<input 
						type="text" 
						id="name" 
						className="form-input"
						placeholder="Joe Bloggs"  
						name="name" 
					/>
				</div>

				<div className="mb-6">
					<label 
						className="block text-gray-700 font-bold mb-2" 
						htmlFor="email">Email Address
					</label>
					<input 
						type="email" 
						id="email" 
						className="form-input" 
						placeholder="jbloggs@email.com" 
						name="email" 
					/>
				</div>

				<div className="mb-6">
					<label 
						className="block text-gray-700 font-bold mb-2" 
						htmlFor="message">Message</label>
					<textarea 
						className="form-input"
						id="message" 
						placeholder="Enter your message..." 
						name="message" 
						rows="4"
					/>
				</div>

				<input type="hidden" name="form-name" value="contact" />
				
				<button 
					className="btn" 
					type="submit" 
					style={{backgroundColor: '#8e7a3e', color: 'white'}}
					>Send Message
				</button>
			</form>
		</div>
	)
}

export default ContactForm
