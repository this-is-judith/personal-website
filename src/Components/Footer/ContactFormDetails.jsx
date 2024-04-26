import React, { useState } from 'react';

function ContactFormDetails() {
    // State to store input values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the data submission to an API or server
        console.log('Form Data:', formData);
        alert('Form submitted, check the console for data!');
    };

    return (
        <form onSubmit={handleSubmit}>
           <label className="form-label">
                <input 
                    className="input-text"
                    type="text" 
                    name="firstName" 
                    placeholder="First Name"
                    value={formData.firstName} 
                    onChange={handleChange} 
                    required 
                />
            </label>

            <label className="form-label">
                <input 
                    className="input-text"
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name"
                    value={formData.lastName} 
                    onChange={handleChange} 
                    required 
                />
            </label>


            <label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
            </label>
        </form>
    );
}

export default ContactFormDetails;
