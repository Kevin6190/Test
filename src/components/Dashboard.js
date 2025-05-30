import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return <div>Welcome to the Home tab!</div>;
      case 'Profile':
        return <div>This is your Profile.</div>;
      case 'Settings':
        return <div>Adjust your Settings here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="tabs">
        <button onClick={() => setActiveTab('Home')} className={activeTab === 'Home' ? 'active' : ''}>
          Home
        </button>
        <button onClick={() => setActiveTab('Profile')} className={activeTab === 'Profile' ? 'active' : ''}>
          Profile
        </button>
        <button onClick={() => setActiveTab('Settings')} className={activeTab === 'Settings' ? 'active' : ''}>
          Settings
        </button>
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard;
