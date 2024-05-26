import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Button = () => {
    return(
        <div className="flex justify-center ">
        <button className="px-4 py-2 bg-white text-gray-900 border border-black px-5  hover:border-yellow-500 hover:bg-yellow-500 ">View All <span><ArrowRightAltIcon/></span></button>
      </div>
    )
}

export default Button;