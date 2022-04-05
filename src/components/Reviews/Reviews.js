import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews]=useReviews()
    return (
        <div className='grid justify-center mt-10'>
            <h2 className='text-3xl font-bold text-center'>Customar Reviews (All)</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-20 mb-10 justify-items-center'>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
        </div>
    );
};

export default Reviews;
