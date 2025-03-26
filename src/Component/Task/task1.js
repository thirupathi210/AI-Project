import React, { useState } from 'react';
import './todo.css';

const Task1 = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    number: ''
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.number) {
      alert("Please enter all details");
      return;
    }

    if (editIndex !== null) {
      // Update existing entry
      const updatedData = [...submittedData];
      updatedData[editIndex] = data;
      setSubmittedData(updatedData);
      setEditIndex(null);
    } else {
      // Add new entry
      setSubmittedData([...submittedData, data]);
    }

    setData({ name: '', email: '', number: '' });
  };

  const handleEdit = (index) => {
    const entry = submittedData[index];
    setData(entry);
    setEditIndex(index); 
  };

  const handleDelete = (index) => {
    const filteredData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(filteredData);
  }; 
  

  return (
    <div className="container">
      <h1 className="title">Todo-List</h1>

      <div className="row">
        {/* Left Column: Form */}
        <div className="column">
          <div className="form-box">
            <h2>{editIndex !== null ? "Edit Contact" : "Add Contact"}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Enter your Name:</label>
                <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label>Number:</label>
                <input type="text" name="number" value={data.number} onChange={handleChange} placeholder="Your Number" />
              </div>
              <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
            </form>
          </div>
        </div>

        {/* Right Column: Table */}
        <div className="column">
          {submittedData.length > 0 && (
            <div className="table-container">
              <h2>Submitted Data</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.name}</td>
                      <td>{entry.email}</td>
                      <td>{entry.number}</td>
                      <td>
                        <button className="edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                        <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task1;
