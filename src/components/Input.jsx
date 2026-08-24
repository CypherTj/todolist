import { useState } from 'react'
import './Input.css'
export default function MainInput({ list, setTodoList }) {
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState(false);

    const isValidInput = (data) => {
        if (!data || !data.trim()) return false;
        return true;
    }
    const handleInput = (e) => {
        setInputText(e.target.value)
        setError(false)
    }
    const handleAddItem = () => {
        if (!inputText) {
            setError(true)
            return
        }
        setTodoList({
            id: list[list.length - 1].id + 1,
            text: inputText,
            status: 'active'
        })
        setInputText('')
        setError(false)
    }
    return (
        <div className="header">
            <h1>My Tasks</h1>
            <div className="input-group">
                <input type="text" placeholder="Add a new task..." value={inputText} onChange={handleInput} />
                <button className="btn-add" onClick={handleAddItem}>Add</button>
            </div>
            {error && <div className='input-error'>Invalid Input Provided.</div>}
        </div>
    )
}