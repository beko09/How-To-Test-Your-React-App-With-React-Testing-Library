import { useState } from 'react';
import AddInput from '../addInput/AddInput';
import IconComplete from './IconComplete';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const updateTask = (id) => {
        let updatedTasks = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                return todo
            } else {
                return todo
            }
        });
        setTodos(updatedTasks)
    }


    return <div>
        <AddInput setTodos={setTodos} todos={todos} />
        <div className="w-2/4 mx-auto my-[50px]">

            {
                todos.length > 0 ? todos.map((todo, index) => (
                    <div className={`item-todo group ${todo.completed && 'complete-todo'}`} onClick={() => updateTask(todo.id)} key={index} data-testid="todo">
                        <p className={`item-body ${todo.completed && 'line-through'}`} >{todo.task}</p>
                        {todo.completed && <IconComplete />}
                    </div>
                ))
                    : <div data-testid="empty" className="text-center text-gray-400">
                        <p>Todo is empty </p>
                    </div>
            }



        </div>
    </div>;
};

export default TodoList;
