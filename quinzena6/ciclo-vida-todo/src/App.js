import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tasks: [],
      inputValue: '',
      filter: ''
    }

  componentDidMount() {
    //pegando armazenamento no LS
    const tasksLS = localStorage.getItem("tasks")

    //se existir algo no LS
    if (tasksLS) {
    //convertendo em objeto
      const tasksObject = JSON.parse(tasksLS)

      this.setState({ tasksObject })
    }
  }

  componentDidUpdate(prevState) {
    //se o estado for diferente 
    if (prevState.tasks !== this.state.tasks) {
    //armazena no LS como "tasks"
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    if (this.state.inputValue) {
      const newTask = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
      }

      this.setState({
        tasks: [...this.state.tasks, newTask],
        inputValue: ""
      })
    }
  }

  selectTarefa = (id) => {
    const doneTasks = this.state.tasks.map((tarefa) => {
      if (tarefa.id === id) {
        const newerTask = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return newerTask
      
      } else {
        return tarefa
      }
    })

    this.setState({ tasks: doneTasks })

  }

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tasks.filter(tarefa => {
      switch (this.state.filter) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
