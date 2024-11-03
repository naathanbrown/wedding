import { createContext, useContext } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";

function App() {
  let queryStringParam = window.location.href.split("guest=")[1];

  if (queryStringParam != "all") {
    queryStringParam = "reception";
  }
  const userTypeContext = createContext(queryStringParam);
  const userType = useContext(userTypeContext);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
