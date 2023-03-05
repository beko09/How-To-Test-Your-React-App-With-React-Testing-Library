import { useState } from 'react';

const AddInput = ({ todos, setTodos }) => {
    const [todo, setTodo] = useState('')
    const addTodo = () => {
        if (!todo) return
        let updatedTodos = [
            ...todos,
            {
                id: Math.floor(Math.random() * 10) + 1,
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }
    return <div className="container-input">

        <input
            type="text" placeholder="write todo..."
            className="input-todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn-add " onClick={addTodo}>add</button>
    </div>;
};

export default AddInput;
