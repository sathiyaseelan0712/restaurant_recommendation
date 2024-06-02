import React, { useState } from 'react';
import Navbar from './Navbar';

function AdminPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        if (username === 'admin' && password === 'y2m_admin') {
            setLoggedIn(true);
        } else {
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
    };

    const renderAdminFeatures = () => {
        return (
            <div>
                <button onClick={addRestaurant}>Add Restaurant</button><br></br>
                <button onClick={getRestaurantById}>Get Restaurant by ID</button>
                <button onClick={getAllRestaurants}>Get All Restaurants</button>
                <button onClick={deleteRestaurant}>Delete Restaurant</button>
                <button onClick={updateRestaurant}>Update Restaurant Details</button>
            </div>
        );
    };
    const addRestaurant = async () => {
        // Implement get restaurant by ID logic here
      };

    const getRestaurantById = () => {
        // Implement get restaurant by ID logic here
    };

    const getAllRestaurants = () => {
        // Implement get all restaurants logic here
    };

    const deleteRestaurant = () => {
        // Implement delete restaurant logic here
    };

    const updateRestaurant = () => {
        // Implement update restaurant details logic here
    };

    return (
        <div>
            {loggedIn ? (
                <div>
                    <h2>Welcome, Admin!</h2>
                    {renderAdminFeatures()}
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <Navbar/>
                    <div className="flex items-center justify-center h-screen">
                        <div className="w-full max-w-md">
                        <div className="bg-purple-200 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl text-purple-500 mb-6">Admin Login</h2>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="block w-full p-2 mb-4 border border-gray-300 rounded "
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full p-2 mb-4 border border-gray-300 rounded "
                            />
                            <button onClick={handleLogin} className="block w-full py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600 focus:outline-none">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
};

export default AdminPage;