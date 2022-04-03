import AboutUs from './AboutUs';
import './App.css';
import Explore from './Explore';
import breadCrumb from './static/images/breadcrumb.png';
import downArrow from './static/images/down-arrow-1.png';
import searchIcon from './static/images/search-icon.png';
import { ReactComponent as ReactLogo } from './static/images/Vector.svg';
function App() {
  return (
    <div className="App">
      <div className="banner">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              <p>Your Logo</p>
            </a>
            <div className="menu-wrapper">
              <div className="breadcrumb">
                <img
                  src={breadCrumb}
                  alt="Bread Crumb"
                  width="40px"
                  height="35px"
                />
              </div>
              <ul className="nav-links-container">
                <li className="nav-links">
                  <a href="#explore">Explore</a>
                </li>
                <li className="nav-links">
                  {' '}
                  <a href="#aboutUs">About us</a>
                </li>
                <li className="nav-links">
                  Cities <img src={downArrow} alt="downArrow" />{' '}
                </li>
                <li className="nav-links">
                  <button>Call</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="banner-text">
          <p>Rethink your living & renting</p>
        </div>
        <div className="banner-subtext">
          <p>Make your stay painless with us</p>
        </div>
        <div className="search-bar-container">
          <div className="input-container">
            <div className="label-text">CITY</div>
            <div className="placeholder-text">Select your city</div>
          </div>
          <div className="input-container">
            <div className="label-text">DATES</div>
            <div className="placeholder-text">Select your dates</div>
          </div>
          <div className="input-container">
            <div className="label-text">GUESTS</div>
            <div className="placeholder-text">Select your guests</div>
          </div>
          <div className="search-container">
            <button>
              <div style={{ display: 'flex' }}>
                <img src={searchIcon} alt="search icon" />
                Search
              </div>
            </button>
          </div>
        </div>
        <a href="#explore">
          <img src={downArrow} alt="downArrow" className="down-arrow" />
        </a>
      </div>
      <ReactLogo className="hero-vector" />
      <Explore />
      <AboutUs />
    </div>
  );
}

export default App;
