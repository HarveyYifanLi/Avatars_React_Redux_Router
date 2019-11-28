import React, {Component} from 'react';
import Avatar from './Avatar';
import NewAvatarForm from './NewAvatarForm';
import {connect} from 'react-redux';
import {addAvatar, removeAvatar, getAvatars} from './actionCreators';
import {Route} from 'react-router-dom';

class AvatarList extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    
    componentDidMount(){
        this.props.getAvatars();
    }
    
    handleSubmit(val){
        //debugger;
        this.props.addAvatar(val);
    }
    
    handleChange(event){
        this.setState({
            inputName: event.target.value
        });
    }
    
    handleRemove(id){
        this.props.removeAvatar(id);
    }
    
    render(){
        // the value of this.props comes from reduxState
        let avatars = this.props.avatars.map((avatar)=>{
            return <Avatar name={avatar.name} key={avatar._id}
                           handleRemove={this.handleRemove.bind(this, avatar._id)}
                    />
        });
        
        return(
            <div>  
                <Route
                    path='/avatars/new'
                    component={ props => (
                        <NewAvatarForm
                            {...props}
                            handleSubmit={this.handleSubmit}
                        />
                    )}
                 />
                <Route exact path='/avatars' component={() => (<div>{avatars}</div>)} />
            </div>
        );
    }
}

function mapReduxStateToReactProps(reduxState){// Once rootReducer is run through createStore(), reduxState will be available
                                    // with the value of initialState
    return {
        avatars: reduxState.avatars
    }; // this will be returned as the this.props for react component
}

// function mapReduxDispatchToReactProps(dispatch){
//     return {
//         addAvatar: function(name){
//             dispatch({
//                 type: "ADD_AVATAR",
//                 name
//             });
//         }
//     };
// }

export default connect(mapReduxStateToReactProps, {addAvatar, removeAvatar, getAvatars})(AvatarList); // This connects individual react component to the react-redux store