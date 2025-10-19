import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets';
import StarRating from './StarRating';

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50 pt-20 pb-23">
      <Title
        title="What Our Guestes Say"
        subTitle="See why discerning travelers continue to choose QuickStay for exclusive, luxurious accommodations around the globe."
      />
      <div className="flex flex-wrap items-center gap-6 mt-20">
        {testimonials.map((testimonials) => (
          <div
            key={testimonials.id}
            className="bg-white p-6 rounded-xl hover:shadow transition-all duration-250"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonials.image}
                alt={testimonials.name}
              />
              <div>
                <p className="font-playfair text-xl">{testimonials.name}</p>
                <p className="text-gray-500">{testimonials.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
             <StarRating />
            </div>
            <p className="text-gray-500 max-w-90 mt-4">
              "{testimonials.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial
