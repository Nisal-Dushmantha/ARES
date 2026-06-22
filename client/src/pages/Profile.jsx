import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile({ user, setUser }) {
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="profile-container">
        <div className="not-logged-in">
          <h2>Please log in to view your profile</h2>
          <button onClick={() => navigate('/login')} className="profile-btn">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-top">
            <div className="profile-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="profile-intro">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>

          <div className="profile-grid">
            <div className="profile-section">
              <h3>Account Information</h3>
              <div className="profile-detail">
                <label>Full Name</label>
                <span>{user.name}</span>
              </div>
              <div className="profile-detail">
                <label>Email Address</label>
                <span>{user.email}</span>
              </div>
              <div className="profile-detail">
                <label>Member Since</label>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>

            <div className="profile-section">
              <h3>Quick Actions</h3>
              <button onClick={() => navigate('/cart')} className="profile-btn secondary">
                View Cart
              </button>
              <button onClick={() => navigate('/')} className="profile-btn secondary">
                Continue Shopping
              </button>
            </div>
          </div>

          <div className="profile-footer">
            <button onClick={handleLogout} className="profile-btn logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
