import React, { useState } from 'react';

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
                <button onClick={addRestaurant}>Add Restaurant</button>
                <button onClick={getRestaurantById}>Get Restaurant by ID</button>
                <button onClick={getAllRestaurants}>Get All Restaurants</button>
                <button onClick={deleteRestaurant}>Delete Restaurant</button>
                <button onClick={updateRestaurant}>Update Restaurant Details</button>
            </div>
        );
    };

    const addRestaurant = () => {
        // Implement add restaurant logic here
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
                    <h2>Admin Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
};

export default AdminPage;