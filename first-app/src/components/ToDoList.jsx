
export default function TodoList({ todo }) {
    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {todo.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
  