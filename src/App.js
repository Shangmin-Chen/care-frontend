import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({
    userId: 'shangmin',
    title: '',
    content: '',
    tags: ''
  });

  // Load entries on mount
  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const response = await axios.get('/api/entries/user/shangmin');
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagsArray = form.tags.split(',').map(t => t.trim()).filter(t => t);
    try {
      await axios.post('/api/entries', { ...form, tags: tagsArray });
      setForm({ ...form, title: '', content: '', tags: '' });
      loadEntries();
    } catch (error) {
      console.error('Error creating entry:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/entries/${id}`);
      loadEntries();
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  return (
    <div className="App">
      <h1>Care Journaling App</h1>

      <h2>New Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          value={form.userId}
          onChange={handleChange}
          placeholder="User ID"
          required
        /><br />
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
        /><br />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Content"
          required
        /><br />
        <input
          type="text"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
        /><br />
        <button type="submit">Save Entry</button>
      </form>

      <h2>Your Entries</h2>
      {entries.map(entry => (
        <div key={entry.id} className="entry">
          <h3>{entry.title}</h3>
          <p>{entry.content}</p>
          <p>Tags: {entry.tags.join(', ')}</p>
          <p>Created: {new Date(entry.createdAt).toLocaleString()}</p>
          <button onClick={() => handleDelete(entry.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;