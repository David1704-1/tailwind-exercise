import "./App.css";
import { AboutUs } from "./components/AboutUs";
import { HeaderContent } from "./components/HeaderContent";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HeaderContent />
      <AboutUs />
    </div>
  );
}

export default App;
