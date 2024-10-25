// Plan.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Plan({ isLoggedIn }) {
  const navigate = useNavigate();

  return (
    <div className="enquiry-container">
      <header className="eqheader">
        <h1>Admin Dashboard</h1>
      </header>

      <div className="table-container">
        <h2>View Plan</h2>

        <table className="enquiry-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>PLAN NAME</th>
              <th>AMOUNT</th>
              <th>DURATION(IN MONTH)</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Abhishek Pandey</td>
              <td>7845120215</td>
              <td>abhi@gmail.com</td>
              <td>23</td>
              <td>Male</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            {/* अन्य ट्रॉस */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Plan;
