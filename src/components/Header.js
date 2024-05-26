const Header = () =>{
    return(

    <header className="bg-teal-900 text-white pt-20 px-[10%]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-6 font-serif">Plan your love journey with us right by your side</h1>
          <div className="flex  flex-col md:flex-row items-center md:space-x-4 w-[100%] bg-black-400">
            <div className="relative w-[100%]  ">
            <label className="absolute bg-teal-900 text-white top-[-.8rem] left-6 px-3 text-sm">Category</label>
            <input type="text" placeholder="Category" className="border w-[100%] p-2 rounded mb-4 md:mb-0 bg-transparent" />
            </div>
            <div className="relative w-[100%]">
            <label className="absolute bg-teal-900 text-white top-[-.9rem] left-7 px-3 text-sm">City</label>
            <input type="text" placeholder="Category" className="border w-[100%] p-2 rounded mb-4 md:mb-0 bg-transparent" />
            </div>
          </div>
          <div className="container flex justify-end py-3">
            <button className="bg-white hover:bg-gray-100 text-teal-900 px-4 py-2 rounded font-medium ">View results</button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src="https://images.unsplash.com/photo-1542042161784-26ab9e041e89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Wedding" 
          className=" mt-4  shadow-lg w-full md:w-4/5" />
        </div>
      </div>
    </header>
    )
}
export default Header 