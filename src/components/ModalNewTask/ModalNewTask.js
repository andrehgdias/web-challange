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
                        <div className="container-fluid">
                            <form>
                                <div className="form-row">
                                    <div className="col">
                                        <div class="form-group">
                                            <label for="nomeCliente">Cliente</label>
                                            <input type="text" class="form-control" id="nomeCliente" placeholder="José Souza" required/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="form-group">
                                            <label for="modelo">Modelo do aparelho</label>
                                            <input type="text" class="form-control" id="modelo" placeholder="Lenovo Ideapad 310" required/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="decricao">Descrição</label>
                                    <textarea class="form-control" id="decricao" rows="5" required>{"Relatório:\n\nObservações:"}</textarea>
                                    <small class="form-text text-muted">
                                        Sua descrição deve ser precisa para facilitar a manutenção e lembre-se de informar os problemas relatados pelo cliente.
                                    </small>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label for="criacao">Data do pedido</label>
                                            <input type="date" id="criacao" style={{'width':'100%'}}required/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label for="entrega">Data de entrega</label>
                                            <input type="date" id="entrega" style={{'width':'100%'}} required/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
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