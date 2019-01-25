import React, { Component } from 'react';
import './App.css';

import TaskColumn from './components/TaskColumn/TaskColumn';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={{'padding-top': '50px'}}>
          <TaskColumn title="Disponível"/>
          <TaskColumn title="Em andamento"/>
          <TaskColumn title="Concluído"/>
        </div>
      </div>
    );
  }
}

export default App;
