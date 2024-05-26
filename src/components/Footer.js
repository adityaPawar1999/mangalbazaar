// components/Footer.js

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold">LOGO</h3>
            <p className="mt-4 text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitaliqua.
            </p>
            <div className="flex mt-4 space-x-4">
              <p href="https://facebook.com">
                <a className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.595 0 0 .6 0 1.325v21.351C0 23.4.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.764v2.31h3.588l-.467 3.622h-3.121V24h6.116C23.405 24 24 23.4 24 22.675V1.325C24 .6 23.405 0 22.675 0z" />
                  </svg>
                </a>
              </p>
              <p href="https://twitter.com">
                <a className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.392-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.95.564-2.005.974-3.127 1.195-.896-.959-2.173-1.559-3.594-1.559-2.72 0-4.923 2.203-4.923 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.425.729-.666 1.577-.666 2.475 0 1.708.87 3.215 2.188 4.096-.807-.025-1.566-.248-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.631 1.953 2.445 3.376 4.6 3.415-1.68 1.32-3.809 2.105-6.102 2.105-.395 0-.786-.023-1.17-.067 2.179 1.396 4.768 2.212 7.548 2.212 9.058 0 14.01-7.514 14.01-14.012 0-.213-.004-.425-.014-.637.961-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </p>
              <p href="https://linkedin.com">
                <a className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.34 2.97 2.98 2.97h.02C6.64 9.45 8 8.11 8 6.48c0-1.64-1.36-2.98-3.02-2.98h-.02zM2 23.5h6V10H2v13.5zM22 13.17c0-3.22-1.72-4.72-4.02-4.72-1.85 0-2.68 1.03-3.14 1.76V10H9.8c.04 1.02 0 13.5 0 13.5h6v-7.53c0-.41.03-.82.15-1.12.32-.78 1.05-1.59 2.28-1.59 1.61 0 2.25 1.2 2.25 2.96V23.5h6v-7.33z" />
                  </svg>
                </a>
              </p>
              <p href="https://instagram.com">
                <a className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.312 3.608 1.287.975.975 1.225 2.242 1.287 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.312 2.633-1.287 3.608-.975.975-2.242 1.225-3.608 1.287-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.312-3.608-1.287-.975-.975-1.225-2.242-1.287-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.312-2.633 1.287-3.608.975-.975 2.242-1.225 3.608-1.287C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.015 7.052.073 5.71.132 4.446.45 3.363 1.536 2.278 2.623 1.96 3.888 1.902 5.23.84 8.334.84 8.744.84 12s.015 3.668.073 4.948c.06 1.342.378 2.607 1.464 3.693 1.087 1.087 2.352 1.405 3.694 1.464 1.28.058 1.69.073 4.949.073s3.668-.015 4.948-.073c1.342-.06 2.607-.378 3.694-1.464 1.087-1.087 1.405-2.352 1.464-3.694.058-1.28.073-1.69.073-4.949s-.015-3.668-.073-4.948c-.06-1.342-.378-2.607-1.464-3.693-1.087-1.087-2.352-1.405-3.694-1.464C15.668.015 15.258 0 12 0zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.17c-2.21 0-4.008-1.798-4.008-4.008s1.798-4.008 4.008-4.008 4.008 1.798 4.008 4.008S14.21 16.008 12 16.008zm6.406-11.845c-.796 0-1.443.647-1.443 1.443s.647 1.443 1.443 1.443 1.443-.647 1.443-1.443-.647-1.443-1.443-1.443z" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold">Quick search</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400 font-semibold">
              <li className='hover:text-white'>Venue</li>
              <li className='hover:text-white' >Vendor</li>
              <li className='hover:text-white'>Blogs </li>
              <li className='hover:text-white'>Login</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400 font-semibold" >
              <li className='hover:text-white'>Home</li>
              <li className='hover:text-white'>About-us</li>
              <li className='hover:text-white'>Contact-us</li>
              <li className='hover:text-white'>Help</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><a href="mailto:info@forn.com">info@forn.com</a></li>
              <li>882-587-3025</li>
              <li>6116 Willa River Suite 610</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between text-sm text-gray-400">
          <p>Terms and conditions</p>
          <p>©2024 - Mangal Baazar | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
