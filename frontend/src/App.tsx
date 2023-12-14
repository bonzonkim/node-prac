import axios from 'axios';
import React, { useEffect, useState } from 'react';


function App() {
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState({
        userid: '',
        userpassword: '',
        username: '',
    });

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('http://localhost:3099/api/user/register', formData)
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

    useEffect(() => {
        if (msg) {
            alert(msg);
        }
    }, [msg])

  return (
    <div className="App">
        <form onSubmit={handleFormSubmit}>
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
  );
}

export default App;
