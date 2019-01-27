import React from 'react';
import './TaskColumn.css';

import $ from 'jquery';

import BtnNewTask from '../BtnNewTask/BtnNewTask';

class TaskColumn extends React.Component{
    state = {
        tasks: []
    };

    // Função chamada ao clicar em CONFIRMAR ao cadastrar uma nova tarefa
    newTask = () => {

        const form = document.getElementById('formTarefa');
        var formValido = true;

        // verificando se todos os campos foram preenchidos
        for(var i=0; i < form.elements.length; i++){
            if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
                formValido = false;
                break;
            }
        }

        if(formValido){
            // Cria uma nova tarefa
            var novaTarefa  = {
                'Titulo': `(${document.getElementById('nomeCliente').value}) ${document.getElementById('modelo').value}`,
                'Modelo': document.getElementById('modelo').value,
                'Cliente':document.getElementById('nomeCliente').value,
                'Descricao':document.getElementById('descricao').value,
                'DataPedido': document.getElementById('criacao').value,
                'DataEntrega': document.getElementById('entrega').value,
                'Estado': 0
            }

            // Adiciona a nova tarefa no array de objetos salvos no ESTADO do componente
            var state = this.state.tasks;
            state.push(novaTarefa);

            // Atualiza o ESTADO do componente
            this.setState(
                {
                    tasks: state
                }
            );

            $('#modalNewTask').modal('hide');
        }else{
            // Mostrar mensagem de erro
            $('#erroPreenchimento').addClass('show');
            window.setTimeout(()=>{
                document.getElementById('erroPreenchimento').classList.remove('show');
            }, 2000);
        }
    }

    render(){
        return (
            <div className="col col-md-4">
                <div className="card">
                    <div className="card-header">
                        {this.props.title}        
                    </div>

                    {/* Se houver alguma tarefa salva irá renderiza-las */}
                    {this.state.tasks.length > 0 &&
                        <div className="card-body">
                            {
                                this.state.tasks.map(
                                    (task, i) => {
                                        return (
                                            <div className="task border-bottom" key={i}>
                                                <h2 className="card-title text-muted">{task.Titulo}</h2>
                                            </div>                    
                                        );
                                    }
                                )
                            }
                        </div>
                    }

                    {/* Se a coluna recebe o título Disponível, então renderiza o botão para adicionar uma nova tarefa */}
                    {this.props.title === "Disponível" &&
                        <BtnNewTask newTask={this.newTask}/>
                    }
                </div>

            </div>
        );
    };
}

export default TaskColumn;