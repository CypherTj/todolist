import { useState } from "react"

export default function Item({ id, text, status, setStatus }) {
    const [checkbox, setCheckBox] = useState(status == 'completed')
    const [itemState, setItemState] = useState(status)
    const [itemText, setItemText] = useState(text)
    const handleUpdate = (e) => {
        if (e.target.value && !e.target.value.trim()) return;
        setItemText(e.target.value);
    }

    const handleSave = (e) => {
        if (e.target.value && !e.target.value.trim()) return;
        setStatus(id, itemState, itemText)
        setCheckBox(false);
        setItemState('active');
    }
    return (
        <li className={`todo-item ${itemState}`}>
            <div className="view-mode task-content">
                <input type="checkbox" className="custom-checkbox" checked={checkbox} onChange={() => {
                    setCheckBox(!checkbox);
                    setStatus(id, 'completed');
                    setItemState(!checkbox ? 'completed' : 'active');
                }} />
                <span className="task-text">{itemText}</span>
            </div>
            {itemState != 'editing' &&
                <div className="actions">
                    <button className="icon-btn edit" title="Edit" onClick={() => {
                        setItemState('editing')
                    }}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className="icon-btn delete" title="Delete" onClick={() => setStatus(id, 'delete')}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>}
            {itemState == 'editing' &&
                <div className="edit-mode">
                    <input type="text" className="edit-input" value={itemText} onChange={handleUpdate} />
                    <button className="btn-small btn-save" onClick={handleSave} >Save</button>
                    <button className="btn-small btn-cancel" onClick={() => {
                        setItemState('active');
                        setCheckBox(false);
                    }} >Cancel</button>
                </div>
            }

        </li>
    )
}