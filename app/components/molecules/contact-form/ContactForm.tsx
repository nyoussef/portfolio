"use client";

import React, {useState} from "react";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import Paragraph from "../../atoms/paragraph/Paragraph";
import emailjs from 'emailjs-com';
const serviceId: string | undefined = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId: string | undefined = process.env.NEXT_PUBLIC_TEMPLATE_ID;
console.log(serviceId);

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    if(serviceId && templateId){
      emailjs.send(serviceId, templateId, {
        name,
        email,
        message,
      })
      .then((response) => {
        console.log('Email envoyé avec succès!', response.status);
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.error('Erreur lors de l\'envoi : ', err);
        setError('Erreur lors de l\'envoi. Veuillez réessayer ultérieurement.');
      });
    };
  }

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto">
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Entrez votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded"
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full" label='Envoyer' />
      {success && <Paragraph className="text-green-500" text="Message envoyé avec succès" />}
      {error && <Paragraph className="text-red-500" text={error} />}
    </form>
  );
};

export default ContactForm;
