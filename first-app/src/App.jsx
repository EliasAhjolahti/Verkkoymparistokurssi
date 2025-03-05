import Greeting from "./components/Greeting";
import ThemeToggle from "./components/ThemeToggle";
import LoginMessage from "./components/LoginMessage";

function App(){
  const isLoggedIn = true;
return(
  <div>

    <Greeting name="Elias"/>

    <ThemeToggle />

    <LoginMessage isLoggedIn={isLoggedIn} />
  </div>
  
)
}

export default App