import React, { useState } from "react";
import axios from "axios";
import { url } from "./server"


function CustomerForm() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", address: "" });
  const [searchName, setSearchName] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${url}/customers/`, form);
    alert("Customer added!");
  };

  const handleSearch = async () => {
    const res = await axios.get(`${url}/customers/search/`, {params: { full_name: searchName },});
    setResult(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <input name="full_name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <textarea name="address" placeholder="Address" onChange={handleChange} />
        <button type="submit">Save</button>
      </form>

      <h2>Search Customer</h2>
      <input value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="Enter full name" />
      <button onClick={handleSearch}>Retrieve</button>

      {result && (
        <div>
          <h3>Result</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default CustomerForm;
