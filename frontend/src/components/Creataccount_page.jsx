import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function CreateAccount(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const id = uuidv4(); // Generate a unique ID

        try {
            const response = await axios.post('http://localhost:3000/register', {
                id,
                username,
                email,
                password,
            });

            console.log(response.data);

            // Send the ID to the user's email
            // This is just a placeholder. You'll need to replace this with your actual email sending code.
            sendEmail(email, `Your unique ID is ${id}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 sm:px-0">
            <div className="w-full max-w-md">
                <h1 className="text-2xl text-center mb-4">Create Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md"
                        />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;