import "./App.css";
import Banner from "./components/Banner";
import Fotter from "./components/Fotter";
import AboutUs from "./pages/AboutUs";
import Explore from "./pages/Explore";
import { ReactComponent as ReactLogo } from "./static/images/Vector.svg";
function App() {
  return (
    <div className="App">
      <Banner />
      <ReactLogo className="hero-vector" />
      <Explore />
      <AboutUs />
      <Fotter />
    </div>
  );
}

export default App;
