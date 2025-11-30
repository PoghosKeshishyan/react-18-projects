import { useRef } from "react";
import Calendar from "./components/Calendar";
import Countries from "./components/Countries";
import Passengers from "./components/Passengers";

function App() {
  const reference = useRef();

  return (
    <div className="App" ref={reference}>
      <div className="container">
        <Countries reference={reference} />
        <Calendar />
        <Passengers reference={reference} />
        <button className="searchBtn">Search</button>
      </div>
    </div>
  );
}

export default App;
