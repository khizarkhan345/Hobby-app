import './App.css';
import React, {react, useState} from 'react';
import ShowHobby from './showHobby';
import AddUser from './addUser';
import Users from './users';
import AddHobby from './addHobby';
import DisplayHobby from './displayHobby';
import Axios from 'axios';
import User from './user';

export default class App extends React.Component {
    state = {
      userID: undefined,
      name: '',
      userData: [],
      passionData: [],
      filterData: []
    }


  handleAddOption = (us) => {
    if(!us){
        return "Kindly! Enter valid value"
    }

    const confirmBox = window.confirm(
      "Do you really want to add this hobby?"
    )
    if (confirmBox === true) {
      
      Axios.post("http://localhost:3001/create", {
            userName: us,
            
          }).then(() => {
            console.log("Success");
            this.fetchData();
          }).catch(() => {
            console.log('Failed');
          })
  
    }
        

}
 
fetchData = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {

     this.setState(() =>({ userData: response.data}));
                 
        })
 
}


componentDidMount(){
   this.fetchData();
}

fetchHobbyData = () => {

  Axios.get("http://localhost:3001/fetchData").then((response) => {

    
    this.setState((prevState) => ({passionData: response.data})); 
                
       })
  const arr1 = this.state.passionData.filter((hobby) => {
    return hobby.userID === this.state.userID
 });
 //console.log(arr1);
 if ((this.state.filterData.indexOf(arr1) == -1)){

  this.setState((prevState) => ({filterData: arr1}));
  console.log("Filter successfull");
 }
}

onUserClick = (id) => {
         
      
  this.setState(() => ({userID: id}));
  
  this.fetchHobbyData();
  
}


handleAddHobby = (passion, hoobyName, year) => {
  if(!passion || !hoobyName || !year){
      return "Kindly! Enter valid value"
  }
  // } else if (this.state.users.indexOf(user) > -1){
  //     return "This value already exists. Kindly, enter another value"
  // }

  const confirmBox = window.confirm(
    "Do you really want to add this hobby?"
  )
  if (confirmBox === true) {
    
    Axios.post("http://localhost:3001/addHobby", {
    userID: this.state.userID,
    passion: passion,
    hobbyName: hoobyName,
    year: year

    
  }).then(() => {
    console.log("Success");
    this.fetchHobbyData();
  }).catch(() => {
    console.log('Failed');
  })

  }
  

}


 
onDeleteHobby = (id) => {

  const confirmBox = window.confirm(
    "Do you really want to delete this hobby?"
  )
  if (confirmBox === true) {
  Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
        //  const arr2 = this.state.passionData.filter((val) => {
        //    return val.id !== id;
        //  })
         this.fetchHobbyData();
    });
  }
}

render(){
    
   
    return (
      <div>
        
       {
           
       }
        
        <div className="container">
            <div className="container__left">
              
               <AddUser 
                handleAddOption = {this.handleAddOption}
                />             
   
        <div className="buttonText">
        {    
          this.state.userData.map((user, key) => ( 
            <User
            //key = {user}
            id = {user.id} 
            name = {user.userName} 
            //count = {index + 1}
            onUserClick = {this.onUserClick}
            />
        ))
          } 
          </div>

          </div>
          <div className='container__right'>
          {
            this.state.userID && 
            (<AddHobby
               handleAddHobby = {this.handleAddHobby}
               //fetchHobbyData = {this.fetchHobbyData}                     
             />
            )
            
        }

        {
     
          this.state.userID &&    ( this.state.filterData.map((val, key) => ( 
              <DisplayHobby
              key = {key}
              id = {val.id} 
              passion = {val.passionLevel}
              hobby = {val.hobbyName}
              year = {val.year} 
              //count = {index + 1}
              onDeleteHobby = {this.onDeleteHobby}
              />
          ))
          )
          
        }

        </div>
        </div>

      </div>
    );
}


}




// function App() {

//   const [userName, setName] = useState('');
//   const [employeeList, setEmployeeList] = useState([]);
  
  
//   // const onNameChange = (e) => {
//   //   setName(e.target.value);
//   //   e.target.value = '';
//   // }
//   const addEmployee = () => {
//     Axios.post("http://localhost:3001/create", {
//       userName: userName,
      
//     }).then(() => {
//       console.log("Success");
//     }).catch(() => {
//       console.log('Failed');
//     })

    
   
//   }

//   // Axios.get("http://localhost:3001/employees").then((response) => {
//   //           setEmployeeList(response.data);
//   //           })
//   // const showEmployee = () => {
//   //   Axios.get("http://localhost:3001/employees").then((response) => {
//   //       setEmployeeList(response.data);
//   //   });
//   // }

  
//   return (
//     <div className="App">
//       <div className="container">
//         <input type="text" placeholder="Enter UserName" 
//         onChange={(e) => {
//           setName(e.target.value);
//               //e.target.value = '';
//            }}/>
//         <button onClick={addEmployee}>Add User</button>
//         </div> 
//         <ShowHobby 
//         {...userName}
//         />
//     </div>

    
//   );
// }

// export default App;

