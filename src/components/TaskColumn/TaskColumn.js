import React from 'react';
import './TaskColumn.css';

class TaskColumn extends React.Component{
    state = {
        tasks: []
    }

    render(){
        return (
            <div className="col col-md-">
                <div className="card">
                    <div className="card-header">
                        {this.props.title}        
                    </div>

                    { this.props.title == "Disponível" &&
                        <button className="btn btn-primary">Nova Tarefa</button>
                    }
                </div>
            </div>
        );
    }
}

export default TaskColumn;