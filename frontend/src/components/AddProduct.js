import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/products", form)
      .then(res => {
        alert("Product added!");
        setForm({ name: "", description: "", price: "", image: "" });
      })
      .catch(err => alert("Error adding product"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" required />
      <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddProduct;
