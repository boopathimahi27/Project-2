import React, { useState } from 'react';
import AddUser from './Components/Users/AddUsers';
import UserList from './Components/Users/UserList';

function App() {
  const[userDetails,setUserDetails]=useState([])
  const gettingUserDetails=(newUser)=>
  {
    setUserDetails((previousState)=>[...previousState,newUser])
  }
  return (
    <div>
       <AddUser gettingUser={gettingUserDetails}/>
       {userDetails.length>0?<UserList users={userDetails}/>:null}
    </div>
  );
}

export default App;
