import { useEffect, useState } from 'react'
import Item from './Item'
import './List.css'

export default function List({ list, activeFilter, updateList }) {
    const [filterList, setFilterList] = useState(list);

    useEffect(() => {
        if (activeFilter == 'all') setFilterList(list)
        else setFilterList(list.filter(e => e.status == activeFilter))
    }, [list, activeFilter])
    return (
        <ul className="todo-list">
            {filterList.map(e => <Item key={e.id} id={e.id} text={e.text} status={e.status} setStatus={(id, status, text) => updateList(id, status, text)} />)}
        </ul>
    )
}