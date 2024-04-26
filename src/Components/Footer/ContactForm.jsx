import React, { useState } from "react";

import "./contactForm.css";

function ContactForm() {
  // State to store input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    category: "pitchingIdea", // initialize category and message
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

        <label className="form-label">
          <input
            className="input-text"
            type="email"
            name="email"
            placeholder="Email"
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
              className="message-text"
              name="message"
              placeholder="Type your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="category-submit-container">
          <label>
            <select
              className="category-text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="projectIdea">Project idea</option>
              <option value="blogIdea">Blog idea</option> // fixed value
              <option value="sharingResource">Resource</option>
            </select>
          </label>

          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
