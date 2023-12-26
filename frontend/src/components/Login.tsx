import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Login () {
  const [msg, setMsg ] = useState('');
  const [loginData, setLoginData] = useState({
          userid: '',
          userpassword: '',
      });
    const [userid, setUserId] = useState('')

    const loginFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(`http://localhost:3099/api/user/login`, loginData)
            .then((response) => {
                console.log(response);
                setUserId(response.data.userid);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const loginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    } 
    useEffect(() => {
      if(msg !== '') {alert(msg)}
    },[msg])

  return (
    <div className="App">
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
        <h1>Welcome user: {userid}</h1>
        </div>
    </div>
  );

}
