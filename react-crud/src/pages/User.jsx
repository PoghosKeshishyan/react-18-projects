import {useParams, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {


  const {id} = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(()=>{
    loadUser();
  }, []);
  

  const loadUser = async()=>{
    const result = await axios.get('http://localhost:3000/users/' + id);
    setUser(result.data);
  }


  return (
    <div>
      <button onClick={()=> navigate(-1)}>GO BACK</button>  
      <h4>{user.id}</h4>
      <h4>{user.name}</h4>
      <h4>{user.age}</h4>
      <img src={user.image} alt="" />
    </div>
  )
}

export default User