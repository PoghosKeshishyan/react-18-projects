import {useNavigate, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';


const EditUser = () => {

  const [user, setUser] = useState({
    name: '',
    age: 18,
    admin: false,
    image: ''
  });


  const navigate = useNavigate();
  const {id} = useParams();


  const loadUser = async()=>{
    const res  = await axios.get('http://localhost:3000/users/'+id);
    console.log(res.data);
    setUser(res.data);
  }

  useEffect(()=>{
    loadUser();
  }, []);


  const onInputChange = e =>{
    setUser({...user, [e.target.name]: e.target.value  });
  }

  const onSubmit = async(e)=>{
    e.preventDefault();
    await axios.put('http://localhost:3000/users/' + id, user);
    navigate('/');
  }

  return (
    <div>
       <h2>UPDATE USER</h2>
      <form onSubmit={e=> onSubmit(e)}>
          <div>
            Name: <input type="text" value={user.name} name="name" onChange={e=> onInputChange(e)} />
          </div>
          <div>
            Age: <input type="number" value={user.age} name="age" onChange={e=> onInputChange(e)} min={18} step={1} />
          </div>
          <div>
            Admin: <input type="text" value={user.admin} name="admin" onChange={e=> onInputChange(e)} />
          </div>
          <div>
            Image: <input type="text" value={user.image} name="image" onChange={e=> onInputChange(e)} />
          </div>
          <button> UPDATE User </button>
      </form>
    </div>
  )
}

export default EditUser