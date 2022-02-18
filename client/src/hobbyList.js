import React from 'react';
import AddHobby from './addHobby';
import DisplayHobby from './displayHobby';
import AddUser from './addUser';
import Axios from 'axios';

class HobbyList extends React.Component{
   constructor(props){
      super(props);

      this.state = {
          passionData: []
      };

      
   }
   
   handleAddOption = (passion, hoobyName, year) => {
      if(!passion || !hoobyName || !year){
          return "Kindly! Enter valid value"
      }
      // } else if (this.state.users.indexOf(user) > -1){
      //     return "This value already exists. Kindly, enter another value"
      // }
      Axios.post("http://localhost:3001/addHobby", {
        userID: this.props.id,
        passion: passion,
        hobbyName: hoobyName,
        year: year

        
      }).then(() => {
        console.log("Success");
      }).catch(() => {
        console.log('Failed');
      })

      this.setState((prevState) => ({passionData: prevState.passionData.concat(
          {
            userID: this.props.id,
            passion:  passion,
            hobbyName: hoobyName,
            year: year                       
          }
          )})); 

   }

  render(){
   return (
    <div>
       <div>
       <AddHobby handleAddOption = {this.handleAddOption} />
       {

        console.log(this.state.passionData)
           
        //  this.props.passio.map((user) => ( 
        //      <DisplayHooby
        //      key = {user} 
        //      passion = {user.passion}
        //      hooby = {user.HoobyName}
        //      year = {user.year} 
        //      //count = {index + 1}
            
        //      />
        //  ))
    }
      
      </div>

    </div>
   )

  }  
 
}

export default HobbyList;