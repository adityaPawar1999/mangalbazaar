import { useState } from "react";


const images = [
  {
    id: '0',
    src: 'https://images.unsplash.com/flagged/photo-1572534779127-b64758946728?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1610173826608-bd1f53a52db1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1583878448938-0de973eec3b9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1611106211090-8f3c79eb8552?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1514178703120-3fa66528901d?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const Gallery = () => {
  const [number,setNumber] =useState('1')
  const imageNumber = (id) =>{
    const pId = parseInt(id)
    setNumber(pId+1)
  }
  return (
    <div className="mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Gallery</h2>
      <p className="text-center text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <div className="relative">
        <div className="flex overflow-x-scroll space-x-4 pb-4 custom-scrollbar">
          {images.map((image, index) => (
            <div key={image.id} className="flex-shrink-0 w-60 h-60 overflow-hidden rounded-sm shadow-lg cursor-pointer">
              <img src={image.src} alt={`Gallery image ${index + 1}`} width={240} height={240} className="object-cover w-full h-full" onClick={()=>imageNumber(image.id)}/>
            </div>
          ))}
        </div>
        <br/>
        <br/>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <p className="text-gray-600 pt-9">{number}/{images.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
