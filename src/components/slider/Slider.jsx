import { useState } from "react";
import Slide from "./slide/Slide";
import banner from '../../assets/slider-img.svg';

const initialItemsState = [
  {
    id: 1, 
    background: '#E8E3DD',
    title: "Stan Smith",
    banner: banner,
    button: {
      url: '/',
      text: 'Смотреть'
    }
  },
  {
    id: 2, 
    background: '#fff',
    title: "Made in USA - 997",
    banner: 'https://www.basketshop.ru/files/catalog/38519/CM997HCAD(11).JPG',
    button: {
      url: '/',
      text: 'Смотреть'
    }
  },
  {
    id: 3, 
    background: '#fff',
    title: "Air Force Awaken",
    banner: 'https://static.street-beat.ru/upload/iblock/afa/afadff3dd411e9f8fc1c0b1944b11d0f.jpeg',
    button: {
      url: '/',
      text: 'Смотреть'
    }
  },
  {
    id: 4, 
    background: '#fff',
    title: "La Classic",
    banner: 'https://static.rendez-vous.ru/files/catalog_models/resize_640x630/2/2819456_krossovki_reebok_classic_leather_belyy_kozha_natural_naya.JPG',
    button: {
      url: '/',
      text: 'Смотреть'
    }
  },
]

const Slider = () => {

  const [items, setItems] = useState(initialItemsState);
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const next = setCurrentIndex.bind(this, currentIndex >= items.length - 1 ? 0 : currentIndex + 1);
  const prev = setCurrentIndex.bind(this, currentIndex <= 0 ? items.length - 1 : currentIndex - 1);

  return (
    <section className="slider">
      <div className="wrapper">
        <div className="slides">
          <Slide slide={items[currentIndex]}/>
        </div>

        <div className="controls">
          <button onClick={prev} className="prev">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={next} className="next">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
