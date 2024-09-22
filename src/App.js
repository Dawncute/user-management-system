import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserList from './pages/UserList';
import AddUser from './pages/AddUser';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main style={{ padding: '20px', minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/add-user" element={<AddUser />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
