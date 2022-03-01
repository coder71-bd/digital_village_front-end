import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosInterceptor from '../../../../hooks/useAxiosInterceptor';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const axiosInterceptor = useAxiosInterceptor();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosInterceptor.get('/auth/allUsers', {
          signal: controller.signal,
        });
        console.log(response?.data);
        isMounted && setUsers(response.data);
      } catch (error) {
        console.log('error here');
        console.log(error.message);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className="mt-[88px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      List of all the users
      <ul>
        {users.map((user) => (
          <li key={user?.name}>{user?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
