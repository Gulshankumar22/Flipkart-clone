import React from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Header = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Flipkart Mini</Link>
      <div className="space-x-4">
        <Link to="/category/Mobiles">Mobiles</Link>
        <Link to="/category/Fashion">Fashion</Link>
        <Link to="/checkout">Cart</Link>
      </div>
    </div>

    
  
<div>


   <div className="flex justify-around py-4 bg-white shadow-m ml-[50px] mr-[50px] mt-[20px]">
      {categories.map((cat, index) => (
        <div key={index} className="flex flex-col items-center text-center text-sm font-medium ">
          <img src={cat.img} alt={cat.name} className="h-14 w-auto mb-1" />
          <span>{cat.name}</span>
        </div>
      ))}
    </div>
</div>




 <div style={{ margin: "20px" }}>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`slide-${index}`} style={{ width: "100%", borderRadius: "10px" }} />
          </div>
        ))}
      </Slider>
    </div>


  
      </>
  );
};

export default Header;