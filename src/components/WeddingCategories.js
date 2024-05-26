import React from 'react';
import Button from './Button';

const WeddingCategories = () => {
  const categories = [
  {
    id: 1,
    name: "Moroso",
    img: "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum",
    bgColor: "",
    fullDesc: "High-quality contemporary furniture with innovative and stylish designs."
  },
  {
    id: 2,
    name: "Artemide",
    img: "https://images.unsplash.com/photo-1493728695749-5a3603bd6908?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum",
    bgColor: "",
    fullDesc: "Leading lighting brand known for innovation and artistic expression."
  },
  {
    id: 3,
    name: "vitra.",
    img: "https://images.unsplash.com/photo-1501626479157-51940c6ad60d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum",
    bgColor: "",
    fullDesc: "Modern furniture and accessories blending function with visual appeal."
  },
  {
    id: 4,
    name: "SALVATORI",
    img: "https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum",
    bgColor: "",
    fullDesc: "Luxury natural stone products with traditional craftsmanship and innovation."
  },
  {
    id: 5,
    name: "Artemide",
    img: "https://images.unsplash.com/photo-1611106211090-8f3c79eb8552?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum",
    bgColor: "",
    fullDesc: "Wide range of innovative lighting solutions for various environments."
  },
  {
    id: 6,
    name: "SALVATORI",
    img: "https://images.unsplash.com/photo-1610173826608-bd1f53a52db1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum",
    bgColor: "",
    fullDesc: "Timeless natural stone pieces enhancing architectural and interior designs."
  },
  {
    id: 7,
    name: "Moroso",
    img: "https://images.unsplash.com/flagged/photo-1572534779127-b64758946728?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum",
    bgColor: "",
    fullDesc: "Creative, high-end furniture blending artistic vision and practical usability."
  },
  {
    id: 8,
    name: "vitra.",
    img: "https://images.unsplash.com/photo-1583878448938-0de973eec3b9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem Ipsum",
    bgColor: "",
    fullDesc: "Innovative furniture improving life quality with iconic, functional designs."
  }
];


  return (
    <div className="container  mx-auto px-[10%] py-[5%] bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-4">Wedding Categories</h1>
      <p className="text-center text-sm mb-8">
        Creative, high-end furniture blending artistic vision and practical usability.Timeless natural stone pieces enhancing <br/>architectural and interior designs.
      </p>
      <div className="flex justify-center  mb-8">
        <nav className="flex flex-wrap gap-[1.8rem]  font-normal">
          <a href="# active" className="text-gray-500 hover:text-gray-900 font-bold text-gray-900">Mehendi</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Venues</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Bridal wear</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Photographer</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Groom wear</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Pandits</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Food</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Grooming</a>
        </nav>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-9">
        {categories.map((category) => (
          <>
          <div key={category.id} className={`border cursor-pointer  hover:shadow-lg rounded-sm overflow-hidden shadow-sm bg-white ${category.id % 2 === 0 ? 'mt-10' : ' mb-10'}`}>
            
              <h2 className={`text-xl font-semibold text-center mt-9" ${category.name=="Artemide" ? 'text-red-400' : ''} `}>{category.name}</h2>
            <img src={category.img} alt={category.name} className="w-full h-64 object-cover p-5"/>
            <div className={`p-4 ${category.bgColor} text-center hover:bg-yellow-300 `}>
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <p className="text-gray-600 text-sm pt-1">{category.fullDesc}</p>
            </div>
          </div>
          </>
        ))}
      </div>
      <Button/>
    </div>
  );
};

export default WeddingCategories;
