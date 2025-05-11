import React from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Header = () => {



  const categories = [
  { name: "Kilos", img: "/images/kilos.webp" },
  { name: "Mobiles", img: "/images/phone.webp"},
  { name: "Fashion", img: " /images/appliance.webp"},
  { name: "Electronics", img: "/images/laptop.jpg" },   
  { name: "Home & Furniture", img: "/images/flight.webp"},
  { name: "Appliances", img: "/images/frize.jpg" },
  { name: "Flight Bookings", img: "/images/furniture.webp" },
  { name: "Beauty, Toys & More", img: "/images/toys.avif" },
  { name: "Two Wheelers", img: "/images/bike.avif" },
];




 const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true
  };

  const images = [
    "/images/sidebaar1.webp",
    "/images/sidebaar2.webp",
    "images/sidebaar3.webp",
    "images/sidebaar4.webp"
  ];

  return (    

    <>





    <div className="flex items-center justify-between px-4 py-2 shadow-md bg-white ">
    
      <div className="flex items-center">
      <Link to ="/" className="h-14 w-auto mr-4 ml-[100px]">
    
    <img  className=" w-[500px] h-[50px]"  src ='/images/filpkartlogo.svg'/>
    </Link> 
      </div>

      
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search for products, brands and more bg-blue"
          className="w-[800px] px-4 py-1 border border-gray-300 rounded focus:outline-none ml-[150px]"
        />
      </div>


      <div className="flex items-center gap-6 text-sl text-black-700 mr-[100px]">
        <h4 className="cursor-pointer"> <Link to="/category/Mobiles">Mobiles</Link></h4>
        <h4 className="cursor-pointer flex items-center gap-2  ">
        
      <Link to="/checkout">Cart</Link></h4>
        <h4 className="cursor-pointer"> <Link to="/category/Fashion">Fashion</Link></h4>
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