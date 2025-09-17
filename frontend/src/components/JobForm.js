import React, { useState } from "react";
import axios from "axios";

function JobForm() {
  const [form, setForm] = useState({ title: "", company: "", location: "", description: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/jobs", form);
    alert("Job Added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Job Title" onChange={handleChange} />
      <input name="company" placeholder="Company" onChange={handleChange} />
      <input name="location" placeholder="Location" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;