import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import MyNavbar from "./components/Navbar";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListingsPage from "./pages/List";
import HomePage from "./pages/Homi";
import UserDetailPage from "./pages/Details";
import HomePage2 from "./pages/Homi2";


function App() {
  return (
    
    <div>
    
    <MyNavbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/book/list" element={<ListingsPage />} />
      <Route path="/book/view/:bookId" element={<UserDetailPage />} />
      <Route path="/show/details" element={<HomePage2 />} />

      
    </Routes>
    
    </div>
    
  );
}

export default App;
