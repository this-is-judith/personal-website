import React, { useState } from "react";

import "./contactForm.css";

function ContactForm() {
  // State to store input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    category: "", // initialize category and message
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted, check the console for data!");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="personal-info">
        <label className="form-label">
          <input
            className="input-text"
            type="text"
            name="firstName"
            placeholder="FIRST NAME"
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
            placeholder="LAST NAME"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-label">
          <input
            className="input-text"
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="additional-info">
        <div className="message-container">
          <label>
            <textarea
              className="additional-text message-text"
              name="message"
              placeholder="TYPE YOUR MESSAGE HERE"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="category-submit-container">
          <label>
            <select
              className="additional-text category-text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option className="option">Project idea</option>
              <option className="option">Blog idea</option>
              <option className="option">Resource</option>
            </select>
          </label>

          <button className="additional-text submit-button" type="submit">
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
