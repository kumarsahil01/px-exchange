// FormPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

function ChatForm() {
  const [formData, setFormData] = useState({
    option: '',
    name: '',
    phone: '',
    apiResponse: null, // Assuming you have this field for storing API response
  });
  const navigate = useNavigate(); // Use useNavigate hook

  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === 'option' && value) {
      // Example API call logic
      try {
        const response = await fetch(`https://your-api.com/options/${value}`);
        const data = await response.json();
        setFormData(prevState => ({
          ...prevState,
          apiResponse: data,
          [name]: value
        }));
      } catch (error) {
        console.error('Failed to fetch API data', error);
        // Handle the error appropriately
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use navigate to redirect and pass state
    navigate('/result', { state: { formData } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="option" value={formData.option} onChange={handleChange} required>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        {/* Add more options as needed */}
      </select>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Your Phone Number"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ChatForm;