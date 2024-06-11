import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

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
        <div className="flex justify-center items-center h-screen bg-gray-100">
            {!isLoggedIn ? (
                <div className="p-8 bg-white rounded-lg shadow-md">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full max-w-xs mt-4"
                    />
                    <button onClick={handleLogin} className="btn btn-primary w-full mt-4">Login</button>
                    <button onClick={handleRegister} className="btn btn-secondary w-full mt-2">Go to Register</button>
                </div>
            ) : (
                <div className="p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold">Welcome, {username}!</h2>
                    <button onClick={handleLogout} className="btn btn-primary w-full mt-4">Logout</button>
                    <button onClick={toggleForm} className="btn btn-secondary w-full mt-2">
                        {showForm ? 'Hide' : 'Show'} Form
                    </button>
                    {showForm && <Form />}
                </div>
            )}
        </div>
    );
}

export default AdminPage;
