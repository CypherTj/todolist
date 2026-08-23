import Item from './Item'
import './List.css'

export default function List({ list, activeFilter, updateList }) {
    const filterList = activeFilter === 'all' 
        ? list 
        : list.filter(e => e.status === activeFilter);

    return (
        <ul className="todo-list">
            {filterList.map(e => <Item key={e.id} id={e.id} text={e.text} status={e.status} setStatus={(id, status, text) => updateList(id, status, text)} />)}
        </ul>
    )
}