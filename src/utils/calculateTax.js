const calculateTax = (value, percent) => {

    if (percent > 1) {
        percent = percent / 100;
    }

    return Math.ceil(value * percent); 

};

export default calculateTax;