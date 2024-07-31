import React from 'react';
import { useState } from 'react'; 
import '../css/Qstyle.css';
const Quotes1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "Self-belief and hard work will always earn you success.",
      author: "Virat Kohli",
    },
    {
      quote: "Success is not a good teacher, failure makes you humble ",
      author: "Shahrukh Khan",
    },
    {
      quote: "Learn from yesterday, live for today, hope for tomorrow. ",
      author: "Albert Einstein",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };
  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  )
}

export default Quotes1;
