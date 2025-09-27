import type { IProduct } from '../types/product-type';

const product_data:IProduct[] = [
  {
    id:1,
    img:'/images/products/product01.jpg',
    title:'Nintendo Switch',
    price:29,
    category:'E-SPORTS',
    description:'Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.',
    status:'in-stock'
  },
  {
    id:2,
    img:'/images/products/product02.jpg',
    title:'Headphone',
    price:69,
    category:'accessories',
    description:'Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.',
    status:'in-stock'
  },
  {
    id:3,
    img:'/images/products/product03.jpg',
    title:'replica Axe',
    price:39,
    category:'E-SPORTS',
    description:'Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.',
    status:'in-stock'
  },
  {
    id:4,
    img:'/images/products/product04.jpg',
    title:'ps5 controller',
    price:49,
    category:'accessories',
    description:'Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.',
    status:'in-stock'
  },
  {
    id:5,
    img:'/images/products/product05.jpg',
    title:'Golden Crown',
    price:19,
    category:'gaming',
    description:'Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.',
    status:'in-stock'
  },
  {
    id:6,
    img:'/images/products/product06.jpg',
    title:'gaming mouse',
    price:59,
    category:'accessories',
    description:'Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.',
    status:'in-stock'
  },
  {
    id:7,
    img:'/images/products/product07.jpg',
    title:'Headphone - X',
    price:29,
    category:'accessories',
    description:'Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.',
    status:'in-stock'
  },
  {
    id:8,
    img:'/images/products/product08.jpg',
    title:'replica gun',
    price:49,
    category:'E-SPORTS',
    description:'Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.',
    status:'in-stock'
  },
  {
    id:9,
    img:'/images/products/product09.jpg',
    title:'gun robot',
    price:100,
    category:'E-SPORTS',
    description:'Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.',
    status:'in-stock'
  }
]

export default product_data;


export const product_data_two: IProduct[] = [
  {
    id: 10,
    img: '/images/products/product-6-1.png',
    title: "Wired Headphone With Mic",
    price: 79.99,
    rating: 5.0,
    category: "E-SPORTS",
    description:
      "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.",
    status: "in-stock",
  },
  {
    id: 11,
    img: '/images/products/product-6-2.png',
    title: "Xbox Wireless Controller",
    price: 69.99,
    rating: 4.8,
    category: "E-SPORTS",
    description:
      "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.",
    status: "in-stock",
  },
  {
    id: 12,
    img: '/images/products/product-6-3.png',
    title: "Streaming Microphone",
    price: 49.99,
    rating: 3.9,
    category: "E-SPORTS",
    description:
      "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.",
    status: "in-stock",
  },
  {
    id: 13,
    img: '/images/products/product-6-4.png',
    title: "XGear A8 Laptop Desk",
    price: 39.99,
    rating: 5.0,
    category: "E-SPORTS",
    description:
      "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.",
    status: "in-stock",
  },
  {
    id: 14,
    img: '/images/products/product-6-5.png',
    title: "Reality Motion Controller",
    price: 89.99,
    rating: 3.8,
    category: "E-SPORTS",
    description:
      "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.",
    status: "in-stock",
  },
  {
    id: 15,
    img: '/images/products/product-6-6.png',
    title: "Mini Portable Speaker 2.0",
    price: 29.99,
    rating: 2.6,
    category: "E-SPORTS",
    description:
      "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.",
    status: "in-stock",
  },
  {
    id: 16,
    img: '/images/products/product-6-7.png',
    title: "Logitech G502 X PLUS Mouse",
    price: 39.99,
    rating: 4.8,
    category: "E-SPORTS",
    description:
      "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.",
    status: "in-stock",
  },
  {
    id: 17,
    img: '/images/products/product-6-8.png',
    title: "Microsoft Xbox Series S 10GB",
    price: 99.99,
    rating: 4.8,
    category: "E-SPORTS",
    description:
      "Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper.",
    status: "in-stock",
  },
];

export const all_products = [...product_data, ...product_data_two];