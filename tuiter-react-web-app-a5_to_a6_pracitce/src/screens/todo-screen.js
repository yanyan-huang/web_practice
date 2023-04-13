export default function TodoScreen(
    {
        todos = 
            [
                {_id: '123', label: 'cook', done: false}, 
                {_id: '234', label: 'teach', done: true}, 
                {_id: '345', label: 'sleep', done: false}
            ]
    }) {
    // const todos = props.todos
    // [ 'buy milk', 'walk dogs', 'take shower' ]
    return (
        <div>
            <h2>Todo Screen</h2>
            <ul>
                {
                    todos.map((todo) => 
                        <li key={todo._id} 
                            className={`${todo.done ? 'bg-success' : 'bg-danger'}`}>
                            {todo.label}
                        </li>)
                }
            </ul>
        </div>
    )
}