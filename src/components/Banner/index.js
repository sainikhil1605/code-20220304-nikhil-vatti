import downArrow from "../../static/images/down-arrow-1.png";
import searchIcon from "../../static/images/search-icon.png";
import NavBar from "../NavBar";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <NavBar />
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
            <div style={{ display: "flex" }}>
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
  );
};
export default Banner;
