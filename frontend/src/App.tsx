import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css'


function App() {
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState({
        userid: '',
        userpassword: '',
        username: '',
    });
    const [loginData, setLoginData] = useState({
        userid: '',
        userpassword: '',
    });

    const registerFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(`http://localhost:3099/api/user/register`, formData)
            .then((response) => {
                console.log(response);
                setMsg(response.data.msg);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const loginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(`http://localhost:3099/api/user/login`, loginData)
            .then((response) => {
                console.log(response);
                setMsg(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const loginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    }

    useEffect(() => {
        if (msg) {
            alert(msg);
        }
    }, [msg])

  return (
    <div className="App">
        <div className="registerForm">
            <form onSubmit={registerFormSubmit}>
                <input
                    type="text"
                    name="userid"
                    placeholder="id"
                    value={formData.userid}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="userpassword"
                    placeholder="password"
                    value={formData.userpassword}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="name"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <button type='submit'>register</button>
            </form>
        </div>
        <div className="loginForm">
            <form onSubmit={loginFormSubmit}>
                <input
                    type="text"
                    name="userid"
                    placeholder="id"
                    value={loginData.userid}
                    onChange={loginInputChange}
                />
                <input
                    type="password"
                    name="userpassword"
                    placeholder="password"
                    value={loginData.userpassword}
                    onChange={loginInputChange}
                />
                <button type='submit'>login</button>
            </form>
        </div>
    </div>
  );
}

export default App;
