import React, {Component} from 'react';

class Avatar extends Component {
    constructor(props){
        super(props);
    }
    
   render(){
       return (
            <div>
                {this.props.name}
                <button onClick={this.props.handleRemove}> Delete </button>
            </div>
        );
   }
}

export default Avatar;