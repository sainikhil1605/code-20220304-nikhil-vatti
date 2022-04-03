import Card from "../../components/Card";
import exploreImage1 from "../../static/images/explore-image-1.png";
import exploreImage2 from "../../static/images/explore-image-2.png";
import "./Explore.css";

function Explore() {
  return (
    <div className="main-container" id="explore">
      <div className="heading-container">
        <p className="heading">Explore</p>
        <div className="sub-heading">
          From one-guest rooms to penthouses with pools and gardens
        </div>
      </div>
      <div className="body-container">
        <Card img={exploreImage1}>
          <div className="content-body">
            <p>Room with one king-size bed</p>
            <div className="button-container">
              <button>35$</button>
              <button>28м²</button>
            </div>
          </div>
          <button className="book-btn">Book!</button>
        </Card>
        <Card img={exploreImage2}>
          <div className="content-body">
            <p>Penthouse for 8 person</p>
            <div className="button-container">
              <button>2039$</button>
              <button>438м²</button>
            </div>
          </div>
          <button className="book-btn">Book!</button>
        </Card>
      </div>
    </div>
  );
}
export default Explore;
