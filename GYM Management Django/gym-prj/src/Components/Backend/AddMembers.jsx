import React, { useState } from 'react';

const AddMembers = ({ plans }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    gender: '',
    plan: plans && plans.length > 0 ? plans[0].name : '', // Safely access the first plan
    joindate: '',
    initamount: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/members/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCSRFToken(), // CSRF token for security
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('New Member Has been Added Successfully');
        // Redirect or perform additional actions here
      } else {
        throw new Error('Something went wrong, Try Again');
      }
    } catch (err) {
      setError(err.message);
      alert(err.message);
    }
  };

  const getCSRFToken = () => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'csrftoken') {
        return value;
      }
    }
    return null;
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
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      borderBottom: '2px solid orange',
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
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <h5 style={styles.title}>Add Member</h5>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Contact Number</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter Contact Number"
            style={styles.input}
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email ID"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Gender</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                required
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                required
              /> Female
            </label>
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Plan</label>
          <select
            name="plan"
            className="form-control"
            style={styles.input}
            value={formData.plan}
            onChange={handleChange}
          >
            {plans && plans.length > 0 ? (
              plans.map((plan, index) => (
                <option key={index} value={plan.name}>
                  {plan.name}
                </option>
              ))
            ) : (
              <option disabled>No plans available</option>
            )}
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Joining Date</label>
          <input
            type="date"
            name="joindate"
            style={styles.input}
            value={formData.joindate}
            onChange={handleChange}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Initial Amount</label>
          <input
            type="text"
            name="initamount"
            placeholder="Enter Initial Amount (In Rs.)"
            style={styles.input}
            value={formData.initamount}
            onChange={handleChange}
            required
          />
        </div>

        <hr />
        <input type="submit" value="Submit" style={styles.button} />
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddMembers;
