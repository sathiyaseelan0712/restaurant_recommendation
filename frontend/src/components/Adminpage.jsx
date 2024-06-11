import React, { useState } from 'react';
import Form from './Form';

function AdminPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleLogin = () => {
        if (username === 'admin' && password === '123456789') {
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
            <div className="flex flex-col items-center justify-center">
            <button onClick={() => setShowForm(true)} className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none">
              Add Restaurant
            </button>
            <button onClick={deleteRestaurant} className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none mt-4">
              Delete Restaurant
            </button>
            <button onClick={updateRestaurant} className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none mt-4">
              Update Restaurant Details
            </button>
          </div>
        );
      };

      const handleFormSubmit = (event) => {
        event.preventDefault();
        setShowForm(false); 
      };

    const addRestaurant = async (event) => {
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
          {loggedIn? (
            <div>
              <h2>Welcome, Admin!</h2>
              {renderAdminFeatures()}
              <button onClick={handleLogout} className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 focus:outline-none mt-4">Logout</button>
              {showForm && (
                  <div className="bg-white p-4 rounded shadow-md">
                    <Form onSubmit={handleFormSubmit} />
                  </div>
              )}
            </div>
          ) : (
                <div>
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