import React from "react";
import User from './user';
import HobbyList from './hobbyList';
import AddHobby from "./addHobby";
import Axios from "axios";
import DisplayHobby from "./displayHobby";
//import { Link } from "react-router-dom";
//import HobbyList from "./HobbyList";


class Users extends React.Component {
     constructor(props){
       super(props);

       this.state = {
           userID: undefined,
           passionData: [],
           filterData: []
       }
      
      
     }

     onUserClick = (id) => {
         
      
       this.setState(() => ({userID: id}));
       

    }  

      
     handleAddOption = (passion, hoobyName, year) => {
      if(!passion || !hoobyName || !year){
          return "Kindly! Enter valid value"
      }
      // } else if (this.state.users.indexOf(user) > -1){
      //     return "This value already exists. Kindly, enter another value"
      // }
      Axios.post("http://localhost:3001/addHobby", {
        userID: this.state.userID,
        passion: passion,
        hobbyName: hoobyName,
        year: year

        
      }).then(() => {
        console.log("Success");
      }).catch(() => {
        console.log('Failed');
      })

      // this.setState((prevState) => ({passionData: prevState.passionData.concat(
      //     {
      //       userID: this.state.userID,
      //       passion:  passion,
      //       hobbyName: hoobyName,
      //       year: year                       
      //     }
      //     )})); 

   }
    

       
       fetchHobbyData = () => {

        Axios.get("http://localhost:3001/fetchData").then((response) => {

          this.setState((prevState) => ({passionData: prevState.passionData.concat(response.data)})); 
                      
             })
        const arr1 = this.state.passionData.filter((hobby) => {
          return hobby.userID === this.state.userID
       });
       console.log(arr1);
        this.setState(() => ({filterData: arr1}));

    }
      render(){

      return(
      <div>
      <div>
        <div className="widget-header">
          <h3 className="widget-header__title">Your Options</h3>
         
     </div>
     </div>

       
       
       {
           
            this.props.users.map((user) => ( 
                <User
                key = {user}
                id = {user.id} 
                name = {user.userName} 
                //count = {index + 1}
                onUserClick = {this.onUserClick}
                />
            ))
       }

       <div>
         {
           console.log(this.state.filterData)
         }
         {
             this.state.userID && 
             (<AddHobby handleAddOption = {this.handleAddOption}
                fetchHobbyData = {this.fetchHobbyData}                     
              />)
         }

         {
           this.state.userID && (
              this.state.filterData.map((user) => ( 
                 <DisplayHobby
                 key = {user} 
                 passion = {user.passion}
                 hooby = {user.HoobyName}
                 year = {user.year} 
                 //count = {index + 1}
                
                 />
             )))
         }
        
       </div>
       </div>
      )
      }
    }; 

export default Users;