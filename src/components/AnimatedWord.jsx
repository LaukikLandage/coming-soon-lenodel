import { useState, useEffect } from 'react';

const WORDS = ['SaaS', 'Fintech', 'Developers', 'Designers'];
const DISPLAY_DURATION = 2000;

export default function AnimatedWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, DISPLAY_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="word-viewport">
      {/* Ghost word for width stability */}
      <span className="word-ghost" aria-hidden="true">
        Developers
      </span>
      
      <div 
        className="word-stack"
        style={{ transform: `translateY(-${index * 1.2}em)` }}
      >
        {WORDS.map((word, i) => {
          const isActive = i === index;
          return (
            <span
              key={word}
              className={`word-item ${isActive ? 'word-item--active' : ''}`}
            >
              {word}
            </span>
          );
        })}
      </div>
    </span>
  );
}
