import React from 'react'

const Form = ({className}) => {

  return (
      <form method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field" className={className}>        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1" htmlFor="name">Name</label>
          <input type="text" id="name" className="form-input" name="name"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1" htmlFor="email">Email</label>
          <input type="email" id="email" className="form-input" name="email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1" htmlFor="email">Phone</label>
          <input type="text" id="phone" className="form-input" name="phone"/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1" htmlFor="message">Message</label>
          <textarea className="form-input" id="message" name="message" rows="4"/>
        </div>

        <input type="hidden" name="form-name" value="contact"/>
        <button className="btn" type="submit">Send Message</button>
      </form>
  );
};

export default Form;