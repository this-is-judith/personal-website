import React, { useState } from 'react';

function ContactForm() {
    // State to store input values
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        category: 'pitchingIdea',
        message: ''
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
            <label>
                Full Name:
                <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    required 
                />
            </label>
            <label>
                Email:
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
            </label>
            <label>
                Category:
                <select name="category" value={formData.category} onChange={handleChange}>
                    <option value="pitchingIdea">Pitching an Idea</option>
                    <option value="sharingResource">Sharing a Resource</option>
                </select>
            </label>
            <label>
                Message:
                <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
