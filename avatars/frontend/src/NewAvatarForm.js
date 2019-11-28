import React, {Component} from 'react';

class NewAvatarForm extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state ={
            inputName: ""
        }
    }
    
    handleChange(event){
        this.setState({
            inputName: event.target.value
        });
    }
    
    handleSubmit(event){
        event.preventDefault();
        this.props.handleSubmit(this.state.inputName); // use handleSubmit passed from parent component through this.props
        event.target.reset(); // reset the form
        this.props.history.push("/avatars"); // redirect to '/avatars' route through history object (passed through this.props from the parent component)
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                id="name" type="text" name="name"
                onChange={this.handleChange}
                />
                <button> Add an Avatar </button>
            </form>
        );
    }
}

export default NewAvatarForm;