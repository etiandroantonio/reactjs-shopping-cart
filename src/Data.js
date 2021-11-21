import computer from "./images/photo-1496181133206-80ce9b88a853.jpg";
import sonyCamera from "./images/phono-camera.jpg";
import iPhone from "./images/photo-1512499617640-c74ae3a79d37.jpg";
import appleWatch from "./images/photo-1579586337278-3befd40fd17a.jpg";
import headPhones from "./images/header-phone.jpg";
import playStation from "./images/photo-1606318801954-d46d46d3360a.jpg";
 

const products = [
    {
      _id: "1",
      name: "Sony Camera",
      image:sonyCamera,
      price: 89.99,
      rating: 4.5,
      numReviews: 12,
    },
    {
      _id: "2",
      name: "Head Phones",
      image:
       headPhones,
  
      price: 599.99,
      rating: 4.0,
      numReviews: 8,
    },
    {
      _id: "3",
      name: "iPhone",
      image:
       iPhone,
  
      price: 929.99,
      rating: 3,
      numReviews: 12,
    },
    {
      _id: "4",
      name: "Sony Playstation 5 Controller",
      image:
        playStation,
  
      price: 399.99,
      rating: 5,
      numReviews: 12,
    },
    {
      _id: "5",
      name: "Laptop",
      image:computer,
      price: 49.99,
      rating: 3.5,
      numReviews: 10,
    },
    {
      _id: "6",
      name: "Apple Watch",
      image:
        appleWatch,
  
      price: 29.99,
      rating: 4,
      numReviews: 12,
    },
  ];
  
  export default products;
  