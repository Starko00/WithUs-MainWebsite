import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/FooterComponents/Footer";
import { Navigation } from "./components/NavigationComponents/Navigation";
import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/Team/TeamPage";
import ScrollToTop from "./components/ScrollToTop";
import { AboutUs } from "./pages/AboutUs/AboutUsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navigation />

        <Routes>
          <Route exacth path="/" element={<HomePage />} />
          <Route exacth path="/team" element={<TeamPage />} />
          <Route exacth path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
