import { useState } from "react";
import { SearchIcon } from "../components/Icons/Icons";
import Product from "../components/product/Product";
import Slide from "../components/slider/slide/Slide";
import Slider from "../components/slider/Slider";
import PRODUCTS from "../data/products";

const HomePage = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))

  const onChangeQuery = (e) => {
    setQuery(e.target.value);
  };


  return (
    <>
      <Slider>
        <Slide />
      </Slider>

      <section className="section">
        <header className="section-header">
          <h2 className="section__title">Все кроссовки</h2>

          <div className="search-box">
            <div className="icon">
              <SearchIcon size={18} />
            </div>

            <input
              value={query}
              onChange={(e) => onChangeQuery(e)}
              type="text"
              placeholder="Поиск..."
            />
          </div>
        </header>

        <div className="products">

            {
                filteredProducts.length ? filteredProducts.map((product) => {
                    return <Product key={product.id} product={product} />;
                  }) : <h2>По запросу "{query}" ничего не найдено!</h2>
            }

          {}
        </div>
      </section>
    </>
  );
};

export default HomePage;
