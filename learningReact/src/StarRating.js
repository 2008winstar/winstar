import React from 'react';
import Star from './Star';

const StarRating = ({starsSelected=0, totalStars=5}) => (
    <div className="star-rating">
        {
            [...Array(totalStars)].map((n, i) => (
                <Star key={i} selected={i<starsSelected} onClick={() => this.change(i + 1)}/>
            ))
        }
        <p>{starsSelected} of {totalStars} stars</p>
    </div>
);

export default StarRating;


