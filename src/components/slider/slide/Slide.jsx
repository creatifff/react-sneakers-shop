import { NavLink } from "react-router-dom";
import slideImg from "../../../assets/slider-img.svg";

const Slide = () => {
  return (
    <div
      style={{
        backgroundColor: "#E8E3DD",
      }}
      className="slide"
    >
      <div className="part">
        <h2>
          <span>Stan Smith,</span>
          <br />
          Forever!
        </h2>
        <NavLink className="button button--xl" to="/">
          Купить
        </NavLink>
      </div>

      <img src={slideImg} alt="react sneakers" />
    </div>
  );
};

export default Slide;
