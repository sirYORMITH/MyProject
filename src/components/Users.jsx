import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Userinfo from './Userinfo'


function Users() {
  const [users, setUsers] = useState(null)

  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data)
    setUsers(response.data)
  }

  useEffect(() => {
    fetchData()
  }, 
  []

  )
  return (
    <div 
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
      backgroundColor: "white"
    }}>
    <div>Users</div>
    {users&&users.map(i=><Userinfo {...i}/>)}
    </div>
  )
}

export default Users