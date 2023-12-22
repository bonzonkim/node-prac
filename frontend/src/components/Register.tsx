import { useState, useEffect, ChangeEvent } from "react";
import axios from 'axios';

export default function Register() {

  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState({
    userid: '',
    userpassword: '',
    username:'',
  });

  const registerFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://localhost:3099/api/user/register', formData)
      .then((res) => {
       console.log(res) 
       setMsg(res.data.msg)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    alert(msg)
  },[msg])

  return (
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
  )
}

