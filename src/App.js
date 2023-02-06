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
import { BlogPage } from "./pages/Blog/BlogPage";
import { BlogComponentLong } from "./components/BlogComponents.js/BlogComponentLong";
import { ServicesPage } from "./pages/Services/ServicesPage";

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
          <Route exacth path="/blog" element={<BlogPage />} />
          <Route
            exacth
            path="/blogSingle/:id"
            element={<BlogComponentLong />}
          />
          <Route exacth path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
