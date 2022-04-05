import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const Review = ({review}) => {
    const {img,name,comment,rating}=review;
    return (
        <div className='h-[300px] border-2 w-[250px] p-4 relative'>
          <div className='flex justify-center'>
              <img className='h-20 w-20 rounded-md' src={img} alt="" />
          </div>
          <div className='absolute bottom-0 py-3'>
              <h2 className='text-xl font-bold'>{name}</h2>
              <p>{comment}</p>
              <p className='flex items-center'>{rating} <StarIcon className='h-5 w-5 text-yellow-300'></StarIcon></p>
          </div>
        </div>
    );
};

export default Review;