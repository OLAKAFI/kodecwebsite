import React from 'react'
import ContactUsForm from './ContactUsForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';
import ContactUsHero from './ContactUsHero';
import ContactH from './ContactH';

function ContactUs() {
  return (
    <>
      
      <ContactUsHero/>
      <ContactUsForm/>
        
    </>
  )
}

export default ContactUs