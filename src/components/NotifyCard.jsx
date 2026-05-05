import { useState } from 'react';

export default function NotifyCard() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="notify-card" id="notify-card">
      <div className="notify-card__visual">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="rocket-illustration">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      </div>
      <div className="notify-card__label">
        Coming Soon
      </div>
      <h2 className="notify-card__title">
        {submitted ? "You're on the list!" : 'Get Notified When We Launch'}
      </h2>
      <p className="notify-card__desc">
        {submitted
          ? "We'll send you an email when we're ready."
          : 'Be the first to experience what we\'re building.'}
      </p>
      <form className="notify-card__form" onSubmit={handleSubmit} id="notify-form">
        <input
          type="email"
          className="notify-card__input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          id="email-input"
          aria-label="Email address"
        />
        <button type="submit" className="notify-card__btn" id="subscribe-btn">
          Subscribe
        </button>
      </form>
    </div>
  );
}
