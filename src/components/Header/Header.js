import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>User Management System</h1>
      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/add-user" style={styles.link}>Add User</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
  },
  link: {
    margin: '0 15px',
    textDecoration: 'none',
    color: 'white',
  }
};

export default Header;
