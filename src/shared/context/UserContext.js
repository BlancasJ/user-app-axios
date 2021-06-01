import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ( { children } ) => {
  const [users, setUsers] = useState([]);

  useEffect( () => {
    axios.get('https://reqres.in/api/users').then(res => setUsers(res.data.data));
  }, []);

  const sendData = async (data) => {
    const res = await axios.post('https://reqres.in/api/users', data);
    console.log(res);
  };
  return (
    <UserContext.Provider value={ { users, setUsers, sendData } }>
      { children }
    </UserContext.Provider>
  )
}