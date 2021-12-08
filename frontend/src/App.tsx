import {useEffect, useState} from "react";

import api from "./service/api"
import User from "./components/User"

interface IUser {
  name: string;
  email: string;
}

function App() {
const [users, setUsers] = useState<IUser[]>([])

useEffect(() => {
  api.get<IUser[]>('/users').then(({data}) => {
   setUsers(data);
  })
}, []);

  return (
    <div className="App">
      <header>
        {users.map(item => <User key={item.email} user={item}/>)}
      </header>
    </div>
  );
}

export default App;
