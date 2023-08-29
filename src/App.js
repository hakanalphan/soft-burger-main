// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'; // Routes içe aktarıldı
import Delivery from "./components/Delivery/Delivery.jsx"
import Payment from "./components/Payment/Payment.jsx"
import HomeScreen from './Screens/HomeScreen';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Navbar from './components/Navbar';
import LayoutWithNavbar from './components/LayoutWithNavbar';
import LayoutWithoutNavbar from './components/LayoutWithoutNavbar';

function App() {
  return (
    
    <Routes>
    <Route path="/signin" element={<LayoutWithoutNavbar><SignIn /></LayoutWithoutNavbar>} />
    <Route path="/signup" element={<LayoutWithoutNavbar><SignUp /></LayoutWithoutNavbar>} />
    <Route path="/" element={<LayoutWithNavbar><HomeScreen /></LayoutWithNavbar>} />
    <Route path="/delivery" component={Delivery} />
        <Route path="/payment" component={Payment} />
    {/* Diğer rotalar */}
  </Routes>
   
  );
}

export default App;