import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/FooterComponents/Footer";
import { Navigation } from "./components/NavigationComponents/Navigation";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Routes>
          <Route exacth path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
