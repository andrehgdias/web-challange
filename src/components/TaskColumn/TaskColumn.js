import React from 'react';
import './TaskColumn.css';

import BtnNewTask from '../BtnNewTask/BtnNewTask';

class TaskColumn extends React.Component{
    state = {
        tasks: [
            {
                'Titulo': "(Jeferson)Lenovo Ideapad 310",
                'Modelo':"Lenovo Ideapad 310",
                'Cliente':"Jeferson",
                'Descricao':"Descrição básica para testes",
                'DataPedido': "26/01/2019",
                'DataEntrega': "29/01/2019",
                'Estado': 0 // 0 = Disponível
            }
        ]
    };

    newTask = () => {

        const form = document.getElementById('formTarefa');
        
        var formValido = true;

        for(var i=0; i < form.elements.length; i++){
            if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
                console.warn('Preencha todos os campos!');
                formValido = false;
                break;
            }
        }
        if(formValido){
            console.warn("New Task Baby!!!");
            var novaTarefa  = {
                'Titulo': "teste",
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
        }
    }


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