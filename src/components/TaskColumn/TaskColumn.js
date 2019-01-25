import React from 'react';

class TaskColumn extends React.Component{
    state = {
        tasks: []
    }

    render(){
        return (
            <div className="col col-md-3">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default TaskColumn;