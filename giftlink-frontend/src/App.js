import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from "./components/LoginPage/LoginPage"
import DetailsPage from './components/DetailsPage/DetailsPage';
import SearchPage from './components/SearchPage/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';

function App() {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/app" element={<MainPage />} />
                <Route path="/app/login" element={<LoginPage />} />
                <Route path="/app/register" element={<RegisterPage />} />
                <Route path="/app/search" element={<SearchPage />} />
                <Route path="/app/product/:productId" element={<DetailsPage />} />
                <Route path="/app/profile" element={<Profile />} />
            </Routes>
        </>
    );
}

export default App;
