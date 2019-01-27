import React from 'react';
import './ToastTask.css';

const ToastTask = props => {
    return (
        <div class="task toast show" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <span class="badge badge-primary">#{props.i}</span>
                <strong class="mr-auto">&nbsp;&nbsp;{props.task.Modelo}</strong>
                <small>Recebido: {props.task.DataPedido}</small>
            </div>
            <div class="toast-body">
                <strong>Cliente:</strong> {props.task.Cliente} &nbsp;&nbsp;<strong>Entregar em:</strong> <span className="text-muted">{props.task.DataEntrega}</span>
            </div>
        </div>
    );
}

export default ToastTask;