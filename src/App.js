import { Navbar } from './Components/Navbar';
import { Routes, Route, Link } from "react-router-dom"; 
import { Store } from './Pages/Store';


function App() {
  return (
    <div className="background-gray height-full">
      <Navbar/>
      <Store/>
    </div>
  );
}

export default App;
