
import Image from 'next/image'

const testimonials = [
  {
    name: "Pricillia Makalew",
    title: "EhyaScape Client",
    image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwbWVufGVufDB8fDB8fHww",
    quote: "Great Services with Good Quality Photographers PhotoScape",
    feedback: "I truly have nothing but the highest praise and appreciation for all that you did for us. Saving me on the video montage projection was huge, and even more important the amazing pictures."
  },
  {
    name: "Dany Olmo",
    title: "EhyaScape Client",
    image: "https://images.unsplash.com/photo-1606214443846-bdc42c0c36f2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Really love the Fast Delivery Photos File Service. Just 48 Hours. It’s Crazy!",
    feedback: "I truly have nothing but the highest praise and appreciation for all that you did for us. Saving me on the video montage projection was huge, and even more important the amazing pictures."
  }
];

const Testimonials = () => {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-left mb-8">What Our Customer<br/> are Saying</h2>
      
      <div className="grid md:grid-cols-2 gap-5 relative">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 ">
            <h1 className="text-[1.6rem] font-semibold mb-2 font-serif font-thin ">"{testimonial.quote}"</h1>
            <p className="text-gray-500 mb-4">{testimonial.feedback}</p>
            <br/><br/>
            <div className="flex items-center ">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="object-cover w-full h-full" />
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
              <hr/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
