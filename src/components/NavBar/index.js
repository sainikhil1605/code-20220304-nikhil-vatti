import breadCrumb from "../../static/images/breadcrumb.png";
import downArrow from "../../static/images/down-arrow-1.png";

const NavBar = () => {
  return (
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
              {" "}
              <a href="#aboutUs">About us</a>
            </li>
            <li className="nav-links">
              Cities <img src={downArrow} alt="downArrow" />{" "}
            </li>
            <li className="nav-links">
              <button>Call</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
