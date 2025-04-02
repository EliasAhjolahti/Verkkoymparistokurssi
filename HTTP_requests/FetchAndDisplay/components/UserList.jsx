import { useEffect, useState } from "react";


export default function UserList() {
const [userData, setUserData] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
              throw new Error(`Fetch failed with status ${response.status}`);
            }
            const data = await response.json();
            setUserData(data);
          } catch (err) {
            setError(err.message);
          } finally{
            setLoading(false);
          }
        };
    
        fetchUserData();
      }, []);
      
      if (loading) return <p>Loading user data</p>;
      if (error) return <p>Couldn't fetch data</p>;
      

       return (
        <div>
          <h2>User List</h2>
          <ul>
            {userData.map(({ id, name, email }) => (
              <li key={id}>
               {id} - {name} – {email}
              </li>
            ))}
          </ul>
        </div>
      );
    }