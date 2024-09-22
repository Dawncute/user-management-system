import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 User Management System. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#4CAF50',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  }
};

export default Footer;
