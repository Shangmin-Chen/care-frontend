// src/components/RootNode.jsx
import React, { useState } from 'react';
import axios from 'axios';

function RootNode() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/api/tree/create-root',
        { name: name },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true, // Send cookies for authentication
        }
      );
      setMessage(`Root node created successfully! ID: ${response.data.id}`);
      setName(''); // Clear input after success
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create a New Root Node</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tree Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter tree name"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
        <button type="submit" style={{ marginLeft: '10px', padding: '5px 10px' }}>
          Create
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RootNode;