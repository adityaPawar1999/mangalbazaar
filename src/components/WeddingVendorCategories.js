import React, { useState } from 'react';
import Button from './Button';

const WeddingVendorCategories = () => {
  const categories = [
    {
      name: 'Mehendi',
      image: 'https://images.unsplash.com/photo-1501626479157-51940c6ad60d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.',
    },
    {
      name: 'Jewelry',
      image: 'https://images.unsplash.com/flagged/photo-1572534779127-b64758946728?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Venue',
      image: 'https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Groom Wear',
      image: 'https://images.unsplash.com/photo-1611106211090-8f3c79eb8552?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  
    const[mainImage,setMainImage]= useState(categories[1].image);
    const changeImage = (img)=>{
      setMainImage(img)
    }

  return (
    <>
    <div className='mx-auto px-[10%] relative '>
     <div className=" grid grid-cols-1 md:grid-cols-12  ">
      <div className="col-span-12 md:col-span-3 p-2 lg:my-[30%] sm:my-[10%]  md:my-[50%]">
         <h1 className='text-[2.5rem] font-bold pb-6'>Top Wedding Vendor Categories</h1>
         <p className=' text-[1.4rem] font-semibold '>{categories[0].name}</p>
         <p>{categories[0].description}</p>
         <p className='py-4'><b>Discover More</b></p>
      </div>
      <div className="col-span-12 md:col-span-6  md:pt-[14%]">
        <img
              src={mainImage}
              alt={categories[0].name}
              className="object-cover w-full h-[480px] pt-2 mb-4 md:mb-0"
            />
      </div>
      <div className="col-span-12 md:col-span-3  sm:pt-[10%] md:pt-[30%]  ">
        {categories.slice(1).map((category, index) => (
              <div key={index} className="flex-1 cursor-pointer">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-40 rounded-lg p-1"
                  onClick={()=>{changeImage(category.image)}}
                />
              </div>
            ))}
      </div>     
    <div className='w-[50%] bg-yellow-300 absolute left-0 h-full z-[-100] '></div>
    </div>
    <Button />
    <br/><br/>
    </div>
    </>
    

    
    
  );
};

export default WeddingVendorCategories;
