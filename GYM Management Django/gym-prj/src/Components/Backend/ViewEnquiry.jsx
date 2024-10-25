import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddEnquiryForm from './AddEnquiryForm'; // Import your form component

function ViewEnquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // State for error handling

  // Fetch enquiries from the API
  const fetchEnquiries = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/enquiries/');
      console.log("Fetched enquiries:", response.data); // Log the response
      setEnquiries(response.data);
    } catch (error) {
      console.error("There was an error fetching the enquiries!", error);
      setError("There was an error fetching the enquiries."); // Set error message
    } finally {
      setIsLoading(false); // Ensure loading is set to false regardless of success or error
    }
  };

  // Handle enquiry deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/enquiries/${id}/delete/`);
      fetchEnquiries(); // Refresh the enquiry list
    } catch (error) {
      console.error("There was an error deleting the enquiry!", error);
    }
  };

  // Handle new enquiry addition
  const handleEnquiryAdded = (newEnquiry) => {
    setEnquiries((prevEnquiries) => [...prevEnquiries, newEnquiry]);
  };

  // Fetch enquiries on component mount
  useEffect(() => {
    fetchEnquiries();
  }, []);

  // Internal CSS for the component
  const styles = {
    enquiryContainer: {
      width: "90%",
      margin: "0 auto",
      padding: "20px",
    },
    eqheader: {
      backgroundColor: "#fff",
      padding: "20px",
      textAlign: "center",
      borderBottom: "2px solid #eee",
    },
    eqheaderH1: {
      margin: 0,
      fontSize: "24px",
      fontWeight: "bold",
    },
    tableContainer: {
      marginTop: "30px",
      position: "relative",
    },
    tableHeading: {
      fontSize: "20px",
      marginBottom: "10px",
      borderBottom: "2px solid #b58f00",
      display: "inline-block",
      paddingBottom: "5px",
    },
    enquiryTable: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "30px",
    },
    tableHeadRow: {
      backgroundColor: "#5c4033", // Dark brown background
      color: "white",
      textAlign: "center",
      padding: "10px",
    },
    tableCell: {
      border: "1px solid #ddd",
      padding: "12px",
      textAlign: "center",
    },
    tableRow: {
      backgroundColor: "#f9f9f9", // Light background for rows
    },
    editBtn: {
      backgroundColor: "#007bff", // Blue background
      color: "white",
      border: "none",
      padding: "8px 16px",
      cursor: "pointer",
      marginRight: "5px",
      borderRadius: "4px",
      fontWeight: "bold",
    },
    deleteBtn: {
      backgroundColor: "#dc3545", // Red background
      color: "white",
      border: "none",
      padding: "8px 16px",
      cursor: "pointer",
      borderRadius: "4px",
      fontWeight: "bold",
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginTop: '20px',
    },
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={styles.error}>{error}</div>; // Display error message
  }

  return (
    <div style={styles.enquiryContainer}>
      <header style={styles.eqheader}>
        <h1 style={styles.eqheaderH1}>Admin Dashboard</h1>
      </header>

      {/* Add Enquiry Form */}
      <AddEnquiryForm onEnquiryAdded={handleEnquiryAdded} />

      <div style={styles.tableContainer}>
        <h2 style={styles.tableHeading}>View Enquiry</h2>

        <table style={styles.enquiryTable}>
          <thead>
            <tr>
              <th style={styles.tableHeadRow}>S.NO</th>
              <th style={styles.tableHeadRow}>NAME</th>
              <th style={styles.tableHeadRow}>CONTACT NUMBER</th>
              <th style={styles.tableHeadRow}>EMAIL ID</th>
              <th style={styles.tableHeadRow}>AGE</th>
              <th style={styles.tableHeadRow}>GENDER</th>
              <th style={styles.tableHeadRow}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry, index) => (
              <tr key={enquiry.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{index + 1}</td>
                <td style={styles.tableCell}>{enquiry.name}</td>
                <td style={styles.tableCell}>{enquiry.mobile}</td>
                <td style={styles.tableCell}>{enquiry.email}</td>
                <td style={styles.tableCell}>{enquiry.age}</td>
                <td style={styles.tableCell}>{enquiry.gender}</td>
                <td style={styles.tableCell}>
                  <button
                    style={styles.editBtn}
                    onClick={() => {/* Navigate to edit page or open modal */}}
                  >
                    Edit
                  </button>
                  <button
                    style={styles.deleteBtn}
                    onClick={() => handleDelete(enquiry.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewEnquiry;
