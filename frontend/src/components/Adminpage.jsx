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
                <button onClick={addRestaurant}>Add Restaurant</button><br></br>
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
  <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
    {loggedIn ? (
      <div className="max-w-md w-full space-y-8 bg-purple-400 p-10 rounded-xl text-center">
        <h2 className="mt-4 text-center text-2xl font-extrabold text-gray-900">Welcome, Admin!</h2>
        {renderAdminFeatures()}
        <button onClick={handleLogout} className="mt-5 py-2 px-6 border border-transparent rounded-md shadow-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Logout</button>
      </div>
    ) : (
      <div className="m-w-md w-max space-y-8 bg-purple-200 p-10 rounded-xl shadow-lg">
        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">AdmiN LogiN</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-5 focus:ring-indigo-500 focus:border-black block w-full shadow-lg sm:text-md border-white rounded-sm bg-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-lg sm:text-md border-white rounded-md bg-white"
        />
        <button onClick={handleLogin} className="mt-5 py-2 px-6 border border-transparent rounded-md shadow-lg text-sm font-medium text-black bg-purple-200 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Login</button>
      </div>
    )}
  </div>
);
};

export default AdminPage;