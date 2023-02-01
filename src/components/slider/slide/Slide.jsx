import { NavLink } from "react-router-dom";
import slideImg from '../../../assets/slider-img.svg';

const Slide = () => {
  return (
    <div style={{
      backgroundColor: '#f4efe9'
    }} className="slide">
      <div className="part">
        <h2>
          Stan Smith,
          <br />
          Forever!
        </h2>
        <NavLink to="/">Купить</NavLink>
      </div>

      <img src={slideImg} alt="react sneakers" />
    </div>
  )
}

export default Slide;
