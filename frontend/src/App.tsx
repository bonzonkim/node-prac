import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
    const [msg, setMsg] = useState('');
    useEffect(() => {
    axios.get('http://localhost:3099/welcome')
    .then((response) => {
            console.log(response)
            setMsg(response.data)
        })
    .catch((error) => {
            console.log(error)
            })
    }, [])

  return (
    <div className="App">
            <form method={"post"} action={"http://localhost:3099/api/user/hello"}>
                <input type={"text"} placeholder={"id"}/>
                <input type={"password"} placeholder={"password"}/>
                <input type={"text"} placeholder={"name"}/>
                <button type={"submit"}>submit</button>
            </form>
        <p>{msg}</p>
    </div>
  );
}

export default App;
