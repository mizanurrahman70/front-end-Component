import axios from "axios";
import { useEffect, useState } from "react";



  
const UserData = () => {
     const [users,setUsers]=useState()
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data=>setUsers(data.data))
    },[users])
    return (
    <div>
       <div className=" overflow-x-auto container mx-auto mt-5">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
        {users?.map((user,index)=><><tr><th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td></tr></>)}
      
    </tbody>
  </table>
</div> 

    </div>
      
    );
};

export default UserData;