import React from 'react';
import './TaskColumn.css';

import $ from 'jquery';

import BtnNewTask from '../BtnNewTask/BtnNewTask';
import { delay } from 'q';

class TaskColumn extends React.Component{
    state = {
        tasks: [
            // {
            //     'Titulo': "(Jeferson)Lenovo Ideapad 310",
            //     'Modelo':"Lenovo Ideapad 310",
            //     'Cliente':"Jeferson",
            //     'Descricao':"Descrição básica para testes",
            //     'DataPedido': "26/01/2019",
            //     'DataEntrega': "29/01/2019",
            //     'Estado': 0 // 0 = Disponível
            // }
        ]
    };

    newTask = () => {

        const form = document.getElementById('formTarefa');
        
        var formValido = true;

        for(var i=0; i < form.elements.length; i++){
            if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
                formValido = false;
                break;
            }
        }

        if(formValido){
            var novaTarefa  = {
                'Titulo': `(${document.getElementById('nomeCliente').value}) ${document.getElementById('modelo').value}`,
                'Modelo': document.getElementById('modelo').value,
                'Cliente':document.getElementById('nomeCliente').value,
                'Descricao':document.getElementById('descricao').value,
                'DataPedido': document.getElementById('criacao').value,
                'DataEntrega': document.getElementById('entrega').value,
                'Estado': 0
            }

            var state = this.state.tasks;
            state.push(novaTarefa);

            this.setState(
                {
                    tasks: state
                }
            );

            console.log(this.state.tasks);
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

                    {this.props.title === "Disponível" &&
                        <BtnNewTask newTask={this.newTask}/>
                    }
                </div>

            </div>
        );
    };
}

export default TaskColumn;