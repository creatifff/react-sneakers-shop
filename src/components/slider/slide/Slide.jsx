import { NavLink } from "react-router-dom";

const Slide = ({ slide }) => {
  return (
    <div
      style={{
        background: slide.background,
      }}
      className="slide"
    >
      <div className="part">
        <h2>
          <span>{slide.title}</span>,
          <br />
          Forever!
        </h2>
        <NavLink className="button button--xl" to={slide.button.url}>
          {slide.button.text}
        </NavLink>
      </div>

      <img
        src={slide.banner}
        height={300}
        alt={slide.title}
        style={{
          maxHeight: 300,
        }}
      />
    </div>
  );
};

export default Slide;
