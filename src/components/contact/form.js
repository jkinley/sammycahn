import React from 'react';

const autoresponse = "Thank you for contacting Sammy Cahn Music. Your message has been received and we will get back to you shortly."

const Form = ({className}) => {

  return (
      <form action="https://formsubmit.co/267e7cba0caec7cbe698682c1004ecf0" method="POST" className={`${className}`}>
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

        <input type="hidden" name="_autoresponse" value={autoresponse}></input>
        <input type="hidden" name="_subject" value="New form submission from sammycahnmusic.com!"></input>
       
        <button className="btn" type="submit">Send Message</button>
      </form>
  );
};

export default Form;