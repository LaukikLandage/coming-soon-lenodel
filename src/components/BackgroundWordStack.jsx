import { useState, useEffect } from 'react';

const BACKGROUND_WORDS = ['SaaS', 'Fintech', 'Developers', 'Designers', 'SaaS', 'Fintech', 'Developers', 'Designers'];

export default function BackgroundWordStack() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      setScrollPos((prev) => (prev + 0.3) % 400); // Very slow subtle upward drift
      requestAnimationFrame(animate);
    });
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="bg-word-column">
      <div 
        className="bg-word-stack"
        style={{ transform: `translateY(-${scrollPos}px)` }}
      >
        {BACKGROUND_WORDS.map((word, i) => (
          <span key={`${word}-${i}`} className="bg-word-item">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
