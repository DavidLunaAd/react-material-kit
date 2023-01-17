import React, { useEffect } from 'react'
import { useState } from 'react'
import { getAllUsers } from 'src/__mocks__/fetchService';

function FetchExample() {
  
  const[users, setUsers] = useState([])

  useEffect(() => {
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUsers()
            .then((response) => {
                console.log('All users', response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                alert('Error: ${error}')
            })
            .finally(() => {
                console.log('Ended obtain users:');
                console.table(users);
            });
  }
  
  
    return (
    <div>
        <h2>Fetch Example</h2>
        {users.map((user, index) =>(
            <p key={index}>
                {user.first_name} {user.last_name}
            </p>))
        }

    </div>
  )
}

export default FetchExample