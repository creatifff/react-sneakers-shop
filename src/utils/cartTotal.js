const cartTotal = (items) => {
    return items.reduce((prev, current) => prev += current.price, 0);
};

export default cartTotal;