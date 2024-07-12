import "./App.css";
import MainContainer from "./components/MainContainer";
import { FormContext } from "./context/formContext";
import "./style.css";

function App() {
  return (
    <div className="App">
      <FormContext>
        <MainContainer />
      </FormContext>
    </div>
  );
}

export default App;
