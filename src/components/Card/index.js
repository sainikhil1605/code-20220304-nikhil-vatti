import "./Card.css";
function Card({ img, children }) {
  return (
    <div className="card-container">
      <img src={img} alt="" />
      <div className="card-content">{children}</div>
    </div>
  );
}
export default Card;
