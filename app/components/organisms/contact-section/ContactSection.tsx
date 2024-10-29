import React from 'react';
import ContactForm from '../../molecules/contact-form/ContactForm';
import Heading from '../../atoms/heading/Heading';

const ContactSection: React.FC = () => {
  return (
    <section className="py-12 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
        <Heading level={2} text='Contactez-moi' className='text-center mb-8' />
      <ContactForm />
    </section>
  );
};

export default ContactSection;