import React, { useState } from 'react';

const AddEquipment = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    unit: '',
    purchaseDate: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to API
    alert('Your New Equipment has been Added Successfully');
    // Redirect or update state as needed
  };

  const styles = {
    container: {
      width: '90%',
      maxWidth: '600px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      margin: '50px auto',
      backgroundColor: '#fff',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      borderBottom: '2px solid orange',
      paddingBottom: '10px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h5 style={styles.title}>Add Equipment</h5>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Equipment Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Equipment Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Price</label>
          <input
            type="text"
            name="price"
            className="form-control"
            placeholder="Enter Price (In RS.)"
            required
            value={formData.price}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Unit</label>
          <input
            type="text"
            name="unit"
            className="form-control"
            placeholder="Enter Unit"
            required
            value={formData.unit}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Purchase Date</label>
          <input
            type="date"
            name="purchaseDate"
            className="form-control"
            required
            value={formData.purchaseDate}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Description</label>
          <textarea
            name="description"
            className="form-control"
            placeholder="Describe about Equipment"
            value={formData.description}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <hr />
        <input type="submit" value="Submit" className="btn btn-primary" style={styles.button} />
      </form>
    </div>
  );
};

export default AddEquipment;
