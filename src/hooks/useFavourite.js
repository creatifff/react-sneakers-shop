import { useState } from "react";

const useFavourite = (initialValue = [], key = "favourites") => {
  const [favourites, setFavourites] = useState(initialValue);

  const addToFavourite = (item) => {
    const isExist = favourites.findIndex((i) => i.id === item.id);

    if (isExist === -1) {
        setFavourites((prev) => [...prev, {...item, is_favourite: true}]);
    }

    // setFavourites((prev) => [...prev, item]);
  };

  const removeFavouriteItemById = (id) => {
    setFavourites((prev) => {
      prev = [...prev];

      prev = prev.filter((item) => item.id !== id);

      return prev;
    });
  };

  return {
    favourites,
    setFavourites,
    addToFavourite,
    removeFavouriteItemById
  };
};

export default useFavourite;
