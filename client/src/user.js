import React from 'react';
import './App.css';
//import { Link } from 'react-router-dom';
//import HobbyList from './HobbyList';
const User = (props) => (
    
  <div className="option">
  
  <button name="myname" className="option__text" onClick={() => props.onUserClick(props.id)}>
     {props.name}  
  </button>
</div>
);

export default User;
