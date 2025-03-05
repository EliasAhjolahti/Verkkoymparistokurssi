import Greeting from "./components/Greeting";
import ThemeToggle from "./components/ThemeToggle";
import LoginMessage from "./components/LoginMessage";
import TodoList from "./components/ToDoList";

function App(){
  const isLoggedIn = true;
  const todo = ["Study", "Eat", "Sleep", "Walk", "Read", "Relax"];
return(
  <div>

    <Greeting name="Elias"/>

    <ThemeToggle />

    <LoginMessage isLoggedIn={isLoggedIn} />

    <TodoList todo={todo}/>
  </div>
  
)
}

export default App