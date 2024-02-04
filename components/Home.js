// client/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [inactiveUsers, setInactiveUsers] = useState([]);

  useEffect(() => {
    fetchInactiveUsers();
  }, []);

  const fetchInactiveUsers = async () => {
    try {
      const response = await axios.get('/api/users/inactive');
      setInactiveUsers(response.data.inactiveUsers);
    } catch (error) {
      console.error('Error fetching inactive users:', error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      {/* Display inactive users as notifications */}
      {inactiveUsers.map(user => (
        <div key={user._id}>
          {/* Display user information as notification */}
          <p>{user.email} has been inactive for more than 5 days.</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
