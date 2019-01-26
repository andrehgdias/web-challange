import React from 'react';

import ModalNewTask from '../ModalNewTask/ModalNewTask';

const BtnNewTask = props => {
    return (
        <div>
            <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#modalNewTask">Nova Tarefa</button>
            <ModalNewTask newTask={props.newTask}/>
        </div>
    );
};

export default BtnNewTask;