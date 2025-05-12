export const products = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    image: "../src/assets/Iphone14.jpeg",
    images: ["../src/assets/Iphone14.jpeg", "../src/assets/Iphone14-2.jpeg"],
    price: 50999,
    originalPrice: 65999,
    discount: "22% off",
    rating: 4.5,
    storage: {
      s1: "128 GB",
      s2: "256 GB",
    },
    description: "Latest iPhone with A16 chip",
    specifications: {
      ram: "8 GB RAM|256 GB ROM ",
      resolution: "17.02 cm (6.7 inch) Full HD+ Display",
      camera: "50MP + 12MP | 10MP Front Camera",
      battery: "4700 mAh Battery",
      processor: "Exynos 2400e Processor",
    },
  },

  {
    id: 2,
    name: "Nike Air Max",
    image: "../src/assets/nikewhite1.jpg",
    images: ["../src/assets/nikewhite1.jpg", "../src/assets/nikewhite2.jpg"],
    price: 4602,
    originalPrice: 7080,
    discount: "35% off",
    rating: 4.3,
    description: "Comfortable and stylish sneakers",
    color: ["../src/assets/nikewhite1.jpg", "../src/assets/nike 1.jpg"],
    size: {
      s1: "8 US",
      s2: "9 US",
      s3: "10 US",
    },
    specifications: {
      material: "Mesh and Synthetic Upper",
      sole: "Rubber Sole",
      weight: "300g (per shoe)",
      fit: "Regular Fit",
      color: "Black/White",
    },
  },

  // Add more dummy products here
];
