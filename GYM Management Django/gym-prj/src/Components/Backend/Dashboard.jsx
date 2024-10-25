import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  // State to hold real-time data
  const [data, setData] = useState({
    enquiry: 0,
    plan: 0,
    member: 0,
    equipment: 0,
  });

  // Simulate fetching data from an API
  useEffect(() => {
    // Simulated API call
    const fetchData = async () => {
      // Mock data
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            enquiry: 2,
            plan: 3,
            member: 1,
            equipment: 2,
          });
        }, 1000); // 1-second delay to simulate a real API call
      });
      setData(response); // Update state with fetched data
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="card">
          <div className="card-number">{data.enquiry}</div>
          <div>Total Enquiry</div>
        </div>
        <div className="card">
          <div className="card-number">{data.plan}</div>
          <div>Total Plan</div>
        </div>
        <div className="card">
          <div className="card-number">{data.member}</div>
          <div>Total Member</div>
        </div>
        <div className="card">
          <div className="card-number">{data.equipment}</div>
          <div>Total Equipment</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer>
      <span>Copyright © 2024 All Right Reserved |</span> 
      <span className="creator">This website is made with <span className="heart">💛</span> by Ashish Sahu</span>
    </footer>
  );
}

export default Dashboard;
