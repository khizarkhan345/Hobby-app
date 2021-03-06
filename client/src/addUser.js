import React from 'react';

export default class AddUser extends React.Component{
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
    handleAddOption = (e) => {
        e.preventDefault();
        console.log('testing');
        const user = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(user);
        
        this.setState(() => ({ error }));

        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render(){
        return (
          <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            <form className="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option__input" type="text" name="option" placeholder='Enter userName' ></input>
            <button className="button">Add</button>
            </form>
          </div>
        );
    }
}