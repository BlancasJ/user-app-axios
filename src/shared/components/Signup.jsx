import React, {useContext} from 'react';
import Form from './Form';
import {SignupContext} from '../context/SignupContext';
import {UserContext} from '../context/UserContext';
import avatar1 from '../images/avatar1.png';

const Signup = ( { state, setState } ) => {
  const {users, setUsers, sendData} = useContext(UserContext);
  const { name, setName, username, setUsername, password, setPassword } = useContext(SignupContext);

  const handleButton = async () => {
    const bool = users.find( user => user.first_name === name && user.email === username && user.last_name === password );
    if(bool instanceof Object) return console.log('Some error');
    setState({ ...state, username: username, password: password, isLoggedIn: true });
    const obj = {
      name: name,
      job: username
    }
    const id = users.length+1;
    sendData(obj);
    setUsers([...users, {id: id, email: username, first_name: name, last_name: password, avatar: avatar1}]);
  };

  const handleLogIn = () => {
    setState( { ...state, signup: false } );
  };

  const INPUTS = [{labelInput:'Name', typeInput:'text', val: name, setVal: setName}, {labelInput:'Username', typeInput:'text', val: username, setVal: setUsername}, 
    {labelInput:'Password', typeInput:'password', val: password, setVal: setPassword}];
  const MESSAGES = [{text: 'Already have an account? Log in', handle: handleLogIn}];

  return (
    <Form 
      inputs={INPUTS}
      textBox='I want to receive inspiration, marketing promotions and updates via email.'
      textButton='Sign up'
      title='Sign up'
      messages={MESSAGES}
      handleButton={handleButton}
    />
  )
}

export default Signup
