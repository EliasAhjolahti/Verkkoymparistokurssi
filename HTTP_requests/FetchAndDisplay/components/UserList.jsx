import { useEffect, useState } from "react";


export default function UserList() {
const [userData, setUserData] = useState([]);


useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);



return( 
<div>
<ul>
{userData.map(({ id, name, email}) => (
    <li key={id}>
        {name} - {email}
    </li>
))}

</ul>
</div>
);
}