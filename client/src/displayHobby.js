import React, {useState}  from "react";
import './App.css';

const DisplayHobby = (props) => {

      return(
        
          <div className="HobbyData">
          <table>
           <tr>
             <td>Passion:{props.passion}</td>
             <td>{props.hobby}</td>
             <td>{props.year}</td>
             <td><button onClick = {() => {props.onDeleteHobby(props.id)}}>delete</button></td>
           </tr>
          </table>
          
          </div>
        
        )
}
   

export default DisplayHobby;