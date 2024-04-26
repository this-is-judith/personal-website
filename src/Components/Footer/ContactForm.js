import React, { useState } from 'react';

function ContactForm() {
    // State to store input values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        category: '',
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

            <label>
                <select name="category"
                value={formData.category}
                onChange={handleChange}>
                    <option value="pitchingIdea">Project idea</option>
                    <option value="pitchingIdea">Blog idea</option>
                    <option value="sharingResource">Resource</option>
                </select>
            </label>

            <label>
                <textarea 
                    name="message" 
                    placeholder="Type your message"
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
