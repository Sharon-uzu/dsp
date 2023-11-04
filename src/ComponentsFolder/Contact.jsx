import React, { useState, useEffect} from "react";
import { Supabase } from "../config/supabase-config";


const Contact = () => {
    const initialValues = {
        fullname: '',
        email: '',
        message: ''
        
    }
    const [formData, setFormData] = useState(initialValues);


    const submit = () => {

  
        // setFormErrors(validate(formData));
        // validate();
        // after validations
        console.log("Started................................................................")
        // crate a record in a public supabase schema.
        Supabase.from("contact-public")
          .upsert([
            {
              name: formData.fullname,
              email: formData.email,
              message: formData.message,
            },
          ])
          .then((response) => {
            console.log(response);
            // navigate("/Congrat");
          });
        // console.log(formData)
      
  
      
      
      // return errors;
     
    };
  return (
    <div className='contact'>
        <h1>Contact Us</h1>
        <div className='contact-form'>
            <div className='inputs'>
                <input type="text" name="" id="" placeholder='full name'
                onChange={(e) => {
                    setFormData({
                      ...formData,
                      fullname: e.target.value,
                    });
                    
                  }}
                required/>
                <input type="email" name="" id="" placeholder='email'
                onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                    
                  }}
                required/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'
                onChange={(e) => {
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    });
                    
                  }}
                required></textarea>
                <input type="submit" value="Send"  className='sub' onClick={submit}/>
            </div>

            <div className='info'>
                <div>
                    <h1>Address</h1>
                    <p>Elzazi complex, Opposite Westharm petrol station along gbalajam/Akpajo road, woji ( Odili Road, Port-Harcourt )</p>

                </div>

                <div className='link'>
                    <h1>Email Us</h1>
                    <p><a href="mailto:hello@harvoxx.com">Hello@harvoxx.com</a></p>
                    <p><a href="mailto:help@harvoxx.com">Help@harvoxx.com</a></p>
                    <p><a href="mailto:admin@harvoxx.com">Admin@harvoxx.com</a></p>
                </div>

                <div className='link'>
                    <h1>Call Us</h1>
                    <p><a href="tel:+2349011684637">+2349011684637</a></p>
                    <p><a href="tel:+2349065308024">+2349065308024</a></p>
                    <p><a href="tel:+2349030643105">+2349030643105</a></p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Contact