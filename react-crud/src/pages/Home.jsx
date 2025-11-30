import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Home = () => {


  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    loadUsers();
  }, []);


  const loadUsers = async()=>{
    const result = await axios.get('http://localhost:3000/users');
    setUsers(result.data);
  }

  const deleteUser = async(id)=>{
    const result = await axios.delete('http://localhost:3000/users/'+id);
    loadUsers();
  }



  return (
    <div className='Home'>
        <button onClick={()=>navigate('/user/add')}> Add New User </button>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Detail</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
          {
            users.map(el=>(
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.age}</td>
                <td> <Link to={'/user/'+el.id}>Detail</Link> </td>
                <td> <Link to={'/user/edit/'+el.id}>Edit</Link> </td>
                <td> <button onClick={()=> deleteUser(el.id)}>Delete</button> </td>
              </tr>
            ))
          }
          </tbody>

        </table>
    </div>
  )
}

export default Home