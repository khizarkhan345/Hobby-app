import React from 'react';
import DisplayHobby from './displayHobby';

export default class AddHobby extends React.Component{
    state = {
        error: undefined
    }
    // constructor(props){
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.state = {
    //         error: undefined
    //     }
    //  }

    handleAddHobby = (e) => {
        e.preventDefault();
        console.log('testing');
        let id = 5;
        const passion = e.target.elements.passion.value.trim();
        const hoobyName = e.target.elements.option.value.trim();
        const year = e.target.elements.year.value.trim();
        const error = this.props.handleAddHobby(passion, hoobyName, year);
        
        this.setState(() => ({ error }));

        if(!error){
            e.target.elements.passion.value = '';
            e.target.elements.option.value = '';
            e.target.elements.year.value = '';

        }
    }

    render(){
        return (
          <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            <form className="add-option" onSubmit={this.handleAddHobby}>
            <select name ="passion">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <input className="add-option__input" type="text" name="option" placeholder='Hooby Name' ></input>
            <input type="number" name="year" placeholder='year'></input>
            <button className="button">Add</button>
            </form>
            <button>show Hobbies</button>
          </div>
        );
    }

}