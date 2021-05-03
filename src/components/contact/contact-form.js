import React from 'react'
import image from '../../images/sammy/sammy-portrait-2.jpg'
import Form from './form';

const ContactForm = () => {
	return (
		<section className="py-16">
      <div className="container mx-auto px-4 lg:px-12">
        
        <h2 className="mb-12">Send Us A Message</h2>
        <div className="lg:flex">
          
          <Form className="bg-gray-300 p-16 w-full lg:mr-12"/>
        
          
          <img style={{width: '480px'}} className="hidden lg:block flex-none" src={image}/>
      
        </div>

        

      </div>
		</section>
	);
};

export default ContactForm;