export default function FeatureCards() {
  const features = [
    {
      title: "Web Development",
      desc: "Fast, scalable & modern web solutions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: "SaaS Development",
      desc: "Custom SaaS platforms built for growth.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful, intuitive & conversion-focused.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      title: "Performance & Scale",
      desc: "Optimized for speed, security & scalability.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    }
  ];

  return (
    <div className="features-grid">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-card__icon">
            {feature.icon}
          </div>
          <h3 className="feature-card__title">{feature.title}</h3>
          <p className="feature-card__desc">{feature.desc}</p>
        </div>
      ))}
    </div>
  );
}
