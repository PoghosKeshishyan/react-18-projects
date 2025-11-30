import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"


const AddUser = () => {


  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    age: 18,
    admin: false,
    image: ""
  });


  const onInputChange = e =>{
    setUser({...user, [e.target.name]: e.target.value  });
  }

  const onSubmit = async(e)=>{
    e.preventDefault();
    await axios.post('http://localhost:3000/users', user);
    navigate('/');
  }


  return (
    <div className="AddUser">
      <h2>ADD NEW USER</h2>
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
          <button> Add User </button>
      </form>
    </div>
  )
}

export default AddUser


