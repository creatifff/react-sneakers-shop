const Slider = ({ childen }) => {
  return (
    <section className="slider">
      <div className="wrapper">
        <div className="slides">{childen}</div>

        <div className="controls">
          <button className="prev">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button className="next">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
