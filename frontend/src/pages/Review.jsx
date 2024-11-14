import React from 'react';

// Sample data for reviews
const reviews = [
  {
    id: 1,
    imgSrc: 'images/pic-1.png',
    text: "I love shopping on Green Harvest! They have a great selection of products, fast shipping, and an easy-to-use website. I'm a happy customer!",
    name: 'John Deo',
    rating: 4.5,
  },
  {
    id: 2,
    imgSrc: 'images/pic-2.png',
    text: "I loved shopping on Green Harvest - their website was so easy to use! I found exactly what I needed and the quality was top-notch. I'll definitely be back for all my gardening needs!",
    name: 'Liza Vren',
    rating: 4.5,
  },
  {
    id: 3,
    imgSrc: 'images/pic-3.png',
    text: "Green Harvest's website is my go-to for all things gardening! Their prices are competitive, and the website is easy to use. I've had great experiences with their customer service team too - top notch!",
    name: 'Daniel Fard',
    rating: 4.5,
  },
];

// Helper function to render stars based on rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fa fa-star"></i>);
  }
  if (halfStar) {
    stars.push(<i key="half" className="fa fa-star-half"></i>);
  }

  return stars;
};

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        Customer's <span>Review</span>
      </h1>
      <div className="review-slider">
        <div className="feedback">
          {reviews.map((review) => (
            <div className="box" key={review.id}>
              <img src={review.imgSrc} alt={review.name} />
              <p>{review.text}</p>
              <h3>{review.name}</h3>
              <div className="stars">{renderStars(review.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
