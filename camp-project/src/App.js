import "./App.css";
import Dashboard from "./layouts/Dashboard";

const name = "Adam";
const surname = "Smith";
const isLoggedIn = true;
function App() {
  return (
    <>
      <h1>
        {isLoggedIn
          ? `My name is ${name}, surname is ${surname} `
          : "You cannot log in."}
      </h1>
      
    </>
  );
}

export default App;
