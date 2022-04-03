import "./App.css";
import Banner from "./components/Banner";
import Fotter from "./components/Fotter";
import AboutUs from "./pages/AboutUs";
import Explore from "./pages/Explore";
import heroBorder from "./static/images/Vector.png";
function App() {
  return (
    <div className="App">
      <Banner />
      <img src={heroBorder} className="hero-vector" alt="border" />
      <Explore />
      <AboutUs />
      <Fotter />
    </div>
  );
}

export default App;
