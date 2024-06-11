import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';
import Mainnavbar from './Mainnavbar';

function AdminPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        const userData = {
            username: username,
            password: password
        };

        try {
            const response = await axios.post('http://localhost:3000/user/login', userData);

            if (response.status === 200) {
                setIsLoggedIn(true);
                alert('Login successful');
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during login');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    const handleRegister = () => {
        navigate('/Register');
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <>
        <Mainnavbar/>
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 min-h-screen flex items-center">
            {!isLoggedIn ? (
                <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border rounded px-4 py-2 w-full mb-4 "
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded px-4 py-2 w-full mb-4"
                    />
                    <button
                        onClick={handleLogin}
                        className="btn btn-primary w-full mb-4 transform transition-transform duration-300 hover:scale-105"
                    >
                        Login
                    </button>
                    <button
                        onClick={handleRegister}
                        className="btn btn-secondary w-full transform transition-transform duration-300 hover:scale-105"
                    >
                        Go to Register
                    </button>
                </div>
            ) : (
                <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Welcome, {username}!</h2>
                    <button
                        onClick={handleLogout}
                        className="btn btn-primary w-full mb-4 transform transition-transform duration-300 hover:scale-105"
                    >
                        Logout
                    </button>
                    <button
                        onClick={toggleForm}
                        className="btn btn-secondary w-full mb-4 transform transition-transform duration-300 hover:scale-105"
                    >
                        {showForm ? 'Hide' : 'Show'} Form
                    </button>
                    {showForm && <Form />}
                </div>
            )}
        </div>
        </>
    );
}

export default AdminPage;
