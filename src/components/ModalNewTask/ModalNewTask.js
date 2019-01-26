import React from 'react';

const ModalNewTask = (props) => (
    <div>
        <div className="modal fade" id="modalNewTask" tabIndex="-1" role="dialog" aria-labelledby="modalNewTask" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Nova Tarefa</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...1<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>...<br/>....<br/>
                        ...1<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>...<br/>....<br/>
                        ...1<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>...<br/>....<br/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-success" onClick={props.newTask}>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ModalNewTask;