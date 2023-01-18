import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Navigation } from './components/NavigationComponents/Navigation';
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation></Navigation>
      
        <Routes>
          <Route exacth path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
