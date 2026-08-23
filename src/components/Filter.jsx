import './Filter.css'
export default function Filter({activeFilter, setFilter}) {

    return (
        <div className="filters">
            <button onClick={() => setFilter('all')}className={`filter-btn ${activeFilter == 'all'? 'active': ''}`}>All</button>
            <button onClick={() => setFilter('active')}className={`filter-btn ${activeFilter == 'active'? 'active': ''}`}>Active</button>
            <button onClick={() => setFilter('completed')}className={`filter-btn ${activeFilter == 'completed'? 'active': ''}`}>Completed</button>
        </div>
    )
}