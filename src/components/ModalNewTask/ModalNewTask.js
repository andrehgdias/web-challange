import React from 'react';

import './ModalNewTask.css';

const ModalNewTask = (props) => (
    
        <div className="modal fade" id="modalNewTask" tabIndex="-1" role="dialog" aria-labelledby="modalNewTask" aria-hidden="true">
            
            <div className="alert alert-warning fade" id="erroPreenchimento" role="alert">
                Preencha <strong>todos</strong> os campos!
                <button type="button" class="close" aria-label="Close" onClick={()=>{document.getElementById('erroPreenchimento').classList.remove('show');}}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">Nova Tarefa</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="container-fluid">
                            <form id="formTarefa">
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="nomeCliente">Cliente</label>
                                            <input type="text" className="form-control" id="nomeCliente" placeholder="José Souza" required/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="modelo">Modelo do aparelho</label>
                                            <input type="text" className="form-control" id="modelo" placeholder="Lenovo Ideapad 310" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descricao">Descrição</label>
                                    <textarea className="form-control" id="descricao" rows="5" defaultValue={"Relatório:\n\nObservações:"} required></textarea>
                                    <small className="form-text text-muted">
                                        Sua descrição deve ser precisa para facilitar a manutenção e lembre-se de informar os problemas relatados pelo cliente.
                                    </small>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="criacao">Data do pedido</label>
                                            <input type="date" id="criacao" style={{'width':'100%'}} required/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="entrega">Data de entrega</label>
                                            <input type="date" id="entrega" style={{'width':'100%'}} required/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-success" id="botaoConfirmar" onClick={props.newTask}>Confirmar</button>
                    </div>

                </div>
            </div>
        </div>
    
);

export default ModalNewTask;