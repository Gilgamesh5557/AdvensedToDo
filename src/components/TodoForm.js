import React, { useState, useEffect, useRef } from 'react'


// const props = { edit: '', onSubmit: '' }
// const {edit,onSubmit} = props

// function TodoForm({edit,qwe }) {
function TodoForm({ edit, onSubmit }) {
    // console.log('>> ', props);
    console.log('---> ', edit);
    const [input, setInput] = useState(edit ? edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    // const test = { key: 'hi'};    
    // console.log('Challenge: ', test());

    // const test123 = () => 123;
    // test123();

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {edit ? (
                <>
                    <input
                        type='text'
                        placeholder='Add a todo'
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={handleChange}
                        // onChange={(komron) => handleChange(komron)}
                        ref={inputRef}
                    />
                    <button className='todo-button edit'>Add todo</button>
                </>
            ) : (
                <>
                    <input
                        type='text'
                        placeholder='Add a todo'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleChange}
                        // onChange={(komron) => handleChange(komron)}
                        ref={inputRef}
                    />
                    <button className='todo-button'>Add todo</button>
                </>
            )
            }
        </form>
    )
}

export default TodoForm
