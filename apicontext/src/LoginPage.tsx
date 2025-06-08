import React, { useState } from "react";
import { useAuth } from "./context/userContext";
// import {UserContextType} from "./context/userContext"
const LoginPage = () => {
  const { user, login,logout } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showForm,setShowForm]=useState(true)

  const handleOnsubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fakeuser = { id: 123, name: name, email: email };
    // console.log(fakeuser);
    
    login(fakeuser)
    setName("")
    setEmail('')
    setShowForm(false)
  };
  return <div>
   { showForm ? (<form onSubmit={handleOnsubmit}  >
      <div>
        <label htmlFor="name">UserName:</label>
        <input type="text" name="name" id="name"  value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <button type="submit">Envoie</button>
    </form>
):
(
  <div style={{display:"flex", alignItems:"center", gap:10}}>
    Bienvenu :<p>{user?.name}</p>
   { user ? <button onClick={logout}>Logout</button>:<button onClick={()=>setShowForm(true)}>Login</button>}
  </div>
)

   } 
  </div>;
};

export default LoginPage;
