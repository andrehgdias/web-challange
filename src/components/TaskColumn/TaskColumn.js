import React from 'react';
import './TaskColumn.css';

import BtnNewTask from '../BtnNewTask/BtnNewTask';


class TaskColumn extends React.Component{
    state = {
        tasks: [
            {
                'Título': "Primeira",
                'Modelo':"Lenovo Ideapad 310",
                'Cliente':"Jeferson",
                'Descrição':"Descrição básica para testes",
                'DataPedido': "26/01/2019"
            }
        ]
    };

    newTask = () => {
        console.warn("New Task Baby!!!");
    };

    render(){
        return (
            <div className="col col-md-4">
                <div className="card">
                    <div className="card-header">
                        {this.props.title}        
                    </div>

                    {this.props.title === "Disponível" &&
                        <BtnNewTask newTask={this.newTask}/>
                    }
                </div>

            </div>
        );
    };
}

export default TaskColumn;