import {React, useState} from 'react';
import Axios from 'axios';
const ShowHobby = (props) => {

   const [name, setName] = useState(props);

   console.log(name, props);
  
//    handleAddOption = (id, passion, hoobyName, year) => {
//       if(!passion || !hoobyName || !year){
//           return "Kindly! Enter valid value"
//       }
//       // } else if (this.state.users.indexOf(user) > -1){
//       //     return "This value already exists. Kindly, enter another value"
//       // }
//      hooby.push({id: id, user_id: this.props.id, passion: passion, HoobyName: hoobyName, year: year});
//     console.log(hooby);
//    }

  

   return (
    <div>
    
       <div>
       
         <h1>{name.userName}</h1>
      
      </div>

    </div>
   );

 
}

export default ShowHobby;