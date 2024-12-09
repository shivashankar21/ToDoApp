import logo from './logo.svg';
import './App.css';
import ToDoLIst from './components/ToDoLIst';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Coforge MyTask Application</h1>
      </header>
    
    <ToDoLIst></ToDoLIst>


    </div>
  );
}

export default App;
