import { useState, useEffect } from 'react';

interface ResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  isTransitioning: boolean;
}

export default function Result({ score, totalQuestions, onRestart }: ResultProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  
  const percentage = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    // Casino-style rolling animation
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = percentage / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setDisplayScore(percentage);
        setIsAnimating(false);
        clearInterval(timer);
      } else {
        // Add some randomness for the rolling effect
        const randomOffset = Math.floor(Math.random() * 10) - 5;
        setDisplayScore(Math.min(Math.floor(currentStep * increment) + randomOffset, 99));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #E8F4F8 0%, #D4EEF7 50%, #C6E9F7 100%)'
      }}
    >
      {/* Blurred background layer */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(180deg, #E8F4F8 0%, #D4EEF7 50%, #C6E9F7 100%)',
          filter: 'blur(100px)'
        }}
      />

      {/* Content - Centered vertically */}
      <div className="text-center">
        {/* Keep Learning Text */}
        <p 
          className="mb-6 animate-zoomIn animate-delay-100"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            fontWeight: 500,
            color: '#15313D',
            letterSpacing: '0.5px'
          }}
        >
          Keep Learning!
        </p>

        {/* Your Final Score Text */}
        <h1 
          className="mb-8 animate-zoomIn animate-delay-200"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            lineHeight: '1.2',
            letterSpacing: '-2px',
            color: '#2B7A9B'
          }}
        >
          Your Final score is
        </h1>

        {/* Score Display */}
        <div 
          className="mb-12 flex items-baseline justify-center animate-zoomIn animate-delay-300"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontWeight: 400,
            color: '#2B7A9B'
          }}
        >
          <span 
            className={`transition-all duration-300 ${isAnimating ? 'blur-sm' : ''}`}
            style={{
              fontSize: 'clamp(6rem, 12vw, 10rem)',
              lineHeight: '1',
              letterSpacing: '-4px',
              display: 'inline-block'
            }}
          >
            {displayScore}
          </span>
          <span 
            style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              marginLeft: '0.5rem'
            }}
          >
            %
          </span>
        </div>

        {/* Start Again Button */}
        <button
          onClick={onRestart}
          className="transition-all duration-300 hover:scale-105 active:scale-95 animate-zoomIn animate-delay-400"
          style={{
            padding: '16px 48px',
            backgroundColor: '#C6E9F7',
            color: '#15313D',
            fontSize: '18px',
            fontWeight: 500,
            fontFamily: 'Inter, sans-serif',
            borderRadius: '12px',
            border: '1px solid #96E5FF',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(60, 171, 218, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#B6E0F0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#C6E9F7';
          }}
        >
          Start Again
        </button>
      </div>
    </div>
  );
}