import React, { useState } from "react";

function ContactFormMessage() {
  // State to store input values
  const [formData, setFormData] = useState({
    category: "",
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
    // Here you would typically handle the data submission to an API or server
    console.log("Form Data:", formData);
    alert("Form submitted, check the console for data!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
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

export default ContactFormMessage;
