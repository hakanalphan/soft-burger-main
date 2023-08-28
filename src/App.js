// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes içe aktarıldı

import HomeScreen from './Screens/HomeScreen';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Navbar from './components/Navbar';
import LayoutWithNavbar from './components/LayoutWithNavbar';
import LayoutWithoutNavbar from './components/LayoutWithoutNavbar';

function App() {
  return (
    <Router>
      <Routes> {/* Routes kullanımı */}
        <Route path="/signin" element={<LayoutWithoutNavbar><SignIn /></LayoutWithoutNavbar>} />
        <Route path="/signup" element={<LayoutWithoutNavbar><SignUp /></LayoutWithoutNavbar>} />
        <Route path="/" element={<LayoutWithNavbar><HomeScreen /></LayoutWithNavbar>} />
        {/* Diğer rotalar */}
      </Routes>
    </Router>
  );
}

export default App;