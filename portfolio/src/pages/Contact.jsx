import React, { useState } from 'react';

function Contact() {
  const initialState = { name: '', email: '', message: '' };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) {
      error = `${name} is required.`;
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address.';
      }
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData(initialState);
    setErrors({});
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            onBlur={handleBlur} 
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
