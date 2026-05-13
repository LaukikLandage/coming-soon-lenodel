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
    <section className="notify-section">
      <div className="notify-card" id="notify-card">
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
    </section>
  );
}
