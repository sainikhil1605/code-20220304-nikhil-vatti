import "./fotter.css";
const Fotter = () => {
  return (
    <fotter className="fotter-container">
      <div className="fotter-content">
        <div className="fotter-content-left">
          <div className="fotter-content-left-top">
            <a href="#" className="brand-logo">
              <p>Your Logo</p>
            </a>
          </div>
          <div className="fotter-content-left-bottom">
            <p className="fotter-content-left-bottom-text">
              © 2021 Company Name
            </p>
            <p className="fotter-content-left-bottom-text">
              All rights reserved
            </p>
          </div>
        </div>
        <div className="fotter-content-right">
          <div className="fotter-content-right-list">
            <div className="fotter-content-right-list-item">
              <a href="#">Explore</a>
            </div>
            <div className="fotter-content-right-list-item">
              <a href="#">About us</a>
            </div>
            <div className="fotter-content-right-list-item">
              <a href="#">Cities</a>
            </div>
            <div className="fotter-content-right-list-item">
              <button>Call</button>
            </div>
          </div>
        </div>
      </div>
    </fotter>
  );
};
export default Fotter;
