import React from 'react';
import './../assets/css/booking/NewBooking.css';

const BookingCardSkeleton = () => {
  return (
    // Applied Tailwind classes for column layout and margin
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      {/* Applied Tailwind classes for card appearance and height */}
      <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
        {/* Skeleton for image - applied Tailwind classes for size and background */}
        <div className="w-full h-40 bg-gray-300 rounded-lg mb-4 animate-pulse"></div>
        {/* Applied Tailwind classes for card body layout */}
        <div className="flex flex-col flex-grow">
          {/* Skeleton for title - applied Tailwind classes for size and background */}
          <div className="h-6 bg-gray-300 rounded mb-2 w-3/4 animate-pulse"></div>
          {/* Skeleton for text - applied Tailwind classes for size and background */}
          <div className="h-4 bg-gray-300 rounded mb-2 w-full animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-5/6 animate-pulse"></div>
          {/* Skeleton for button - applied Tailwind classes for size and background */}
          <div className="h-10 bg-gray-300 rounded-md w-full mt-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingCardSkeleton;
