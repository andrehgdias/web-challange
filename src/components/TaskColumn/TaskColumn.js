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
                'Entrega': "29/01/2019"
            }
        ]
    };

    newTask = () => {

        const form = document.getElementById('formTarefa');
        const botaoConfirmar = document.getElementById('formTarefa');
        
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
            console.log(this.state.tasks);
            var novaTarefa  = {
                'Titulo': "teste",
                'Modelo': document.getElementById('modelo').value,
                'Cliente':document.getElementById('nomeCliente').value,
                'Descricao':document.getElementById('descricao').value,
                'DataPedido': document.getElementById('criacao').value,
                'Entrega': document.getElementById('entrega').value
            }

            this.setState(
                {
                    tasks: {...this.state.tasks.push(novaTarefa)}
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