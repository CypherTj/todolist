import { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import MainInput from './components/Input'
import List from './components/List'

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 11,
      text: "Read documentation",
      status: 'active'
    },
    {
      id: 12,
      text: "Ask Claude AI to teach React",
      status: 'active'
    },
    {
      id: 13,
      text: "Give Up 😂",
      status: 'completed'
    }
  ])

  const [activeFilter, setFilter] = useState('all')

  const handleUpdateItem = (id, status, text) => {
    const items = todoList.map(e => {
      if (e.id == id && status == 'delete') {
        return null
      } else if (e.id == id) {
        return {
          ...e,
          status: status,
          text: text
        }
      }
      return e;
    }).filter(Boolean);
    setTodoList([...items])
  }

  return (
    <div className="todo-app-card">
      <MainInput list={todoList} setTodoList={(newItem) => setTodoList([...todoList, newItem])} />
      <Filter activeFilter={activeFilter} setFilter={(filter) => setFilter(filter)} />
      <List list={todoList} activeFilter={activeFilter} updateList={(id, status, text) => handleUpdateItem(id, status, text)} />
    </div>
  )
}

export default App
