import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import App from './App'
import {BrowserRouter as Router, Route, Routes}
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        if (username === 'admin' && password === 'admin') {
            navigate('/App'); // Navigate to the Dashboard component
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button className='loginButton' type="submit">Login</button>
        </form>
    );
}

export default Login;
