import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

 const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

const images = [
  "/images/sidebaar1.webp",
  "/images/sidebaar2.webp",
  "images/sidebaar3.webp",
  "images/sidebaar4.webp",
];

const Home = () => {
  return (
    <>
      <div className="p-4">
        <div style={{ margin: "20px" }}>
          <Slider {...settings}>
            {images.map((url, index) => (
              <div key={index}>
                <img
                  src={url}
                  alt={`slide-${index}`}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              </div>
            ))}
          </Slider>
        </div>
       
        <h2 className="text-xl mt-4 mb-2">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 ">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
