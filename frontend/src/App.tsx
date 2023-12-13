import axios from 'axios';
import React, { useEffect, useState } from 'react';


function App() {
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState({
        userid: '',
        userpassword: '',
        username: '',
    });

    useEffect(() => {
    axios.get('http://localhost:3099/welcome')
    .then((response) => {
            //console.log(response)
            setMsg(response.data)
        })
    .catch((error) => {
            console.log(error)
            })
    }, [])
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
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
        console.log(formData)
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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
        <p>{msg}</p>
    </div>
  );
}

export default App;
