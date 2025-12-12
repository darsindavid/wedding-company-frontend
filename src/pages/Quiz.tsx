import { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import AnswerOption from '../components/AnswerOption';
import NavButtons from '../components/NavButtons';
import ProgressBar from '../components/ProgressBar';

export default function Quiz() {
  const [currentPage, setCurrentPage] = useState<'quiz' | 'result'>('quiz');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [isExpandingOut, setIsExpandingOut] = useState(false);
  const [isShrinkingIn, setIsShrinkingIn] = useState(false);
  const [displayScore, setDisplayScore] = useState(0);
  const [isAnimatingScore, setIsAnimatingScore] = useState(true);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleOptionSelect = (index: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = index;
    setSelectedAnswers(newAnswers);
  };

  const calculateScore = (): number => {
    return selectedAnswers.reduce((score: number, answer, index) => {
      if (answer === questions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const handleSubmit = () => {
    setIsExpandingOut(true);
    
    setTimeout(() => {
      setCurrentPage('result');
      setIsExpandingOut(false);
      
      // Start casino animation
      const percentage = Math.round((calculateScore() / questions.length) * 100);
      const duration = 2000;
      const steps = 60;
      const increment = percentage / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setDisplayScore(percentage);
          setIsAnimatingScore(false);
          clearInterval(timer);
        } else {
          const randomOffset = Math.floor(Math.random() * 10) - 5;
          setDisplayScore(Math.min(Math.floor(currentStep * increment) + randomOffset, 99));
        }
      }, duration / steps);
    }, 900);
  };

  const handleRestart = (): void => {
    setIsShrinkingIn(true);
    setCurrentPage('quiz');
    
    setTimeout(() => {
      setCurrentQuestionIndex(0);
      setSelectedAnswers(new Array(questions.length).fill(null));
      setIsShrinkingIn(false);
      setDisplayScore(0);
      setIsAnimatingScore(true);
    }, 900);
  };

  return (
    <div 
        className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: currentPage === 'result' 
          ? 'linear-gradient(180deg, #E8F4F8 0%, #FFFFFF 50%, #FFFFFF 100%)'
          : 'linear-gradient(180deg, #B6CFEE 0%, #71C6E2 33%, #D9F4FA 66%, #B6CFEE 100%)',
        transition: 'background 0.9s ease-in-out'
      }}
    >
      {/* Blurred background layer */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: currentPage === 'result'
            ? 'linear-gradient(180deg, #E8F4F8 0%, #FFFFFF 50%, #FFFFFF 100%)'
            : 'linear-gradient(180deg, #B6CFEE 0%, #71C6E2 33%, #D9F4FA 66%, #B6CFEE 100%)',
          filter: 'blur(100px)',
          transition: 'background 0.9s ease-in-out'
        }}
      />

      {/* Quiz Card - Only visible during quiz */}
      {(currentPage === 'quiz' || isExpandingOut || isShrinkingIn) && (
        <div 
          className={`relative w-full max-w-7xl ${
            isExpandingOut ? 'animate-expandOut' : 
            isShrinkingIn ? 'animate-shrinkIn' : ''
          }`}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '50px',
            border: '0.72px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            padding: '2.5rem',
            overflow: 'hidden'
          }}
        >
          
          {/* Inner Content Box */}
           <div 
    className="relative w-full h-full"
    style={{
      backgroundColor: '#F4FDFF',
      borderRadius: '42px',
      padding: '4rem 3rem',
      minHeight: '600px',
      border: '1px solid rgba(255,255,255,0.8)'
            }}
          >
            {/* Heading with Gradient */}
            <h1 
              className="text-center mb-4"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(3rem, 5vw, 5.5rem)',
                lineHeight: '1.1',
                letterSpacing: '-4px',
                background: 'linear-gradient(90deg, #2B7A9B 0%, #3CABDA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Test Your Knowledge
            </h1>

            {/* Subtitle Box */}
            <div 
              className="flex items-center justify-center mx-auto mb-8"
              style={{
                maxWidth: '422px',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                padding: '10px 31px'
              }}
            >
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#15313D',
                  textAlign: 'center'
                }}
              >
                Answer all questions to see your results
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8 max-w-4xl mx-auto">
              <ProgressBar progress={progress} />
            </div>

            {/* Question Header Box */}
            <div 
              className="flex items-center justify-center mx-auto mb-6"
              style={{
                maxWidth: '896px',
                minHeight: '78px',
                borderRadius: '10px',
                border: '1px solid #96E5FF',
                background: 'linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)',
                padding: '24px'
              }}
            >
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(1rem, 1.25vw, 1.25rem)',
                  fontWeight: 500,
                  color: '#15313D',
                  textAlign: 'center'
                }}
              >
                {currentQuestion.id}. {currentQuestion.question}
              </p>
            </div>

            {/* Answer Options Container */}
            <div 
              className="flex flex-col mx-auto mb-8"
              style={{
                maxWidth: '896px',
                gap: '14px'
              }}
            >
              {currentQuestion.options.map((option, index) => (
                <AnswerOption
                  key={index}
                  option={option}
                  isSelected={selectedAnswers[currentQuestionIndex] === index}
                  onClick={() => handleOptionSelect(index)}
                />
              ))}
            </div>

            {/* Navigation Buttons or Submit */}
            <div className="flex justify-end max-w-4xl mx-auto">
              {isLastQuestion && selectedAnswers[currentQuestionIndex] !== null ? (
                <button
                  onClick={handleSubmit}
                  className="transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    padding: '12px 32px',
                    backgroundColor: '#3CABDA',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: 500,
                    fontFamily: 'Inter, sans-serif',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(60, 171, 218, 0.3)'
                  }}
                >
                  Submit
                </button>
              ) : (
                <NavButtons
                  onPrev={handlePrev}
                  onNext={handleNext}
                  canGoPrev={currentQuestionIndex > 0}
                  canGoNext={currentQuestionIndex < questions.length - 1}
                />
              )}
            </div>
          </div>

          {/* Dark Grey Gradient Bar at Bottom */}
          <div 
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: 'linear-gradient(90deg, #3D3D3D 0%, #6B6B6B 50%, #9E9E9E 100%)',
              borderRadius: '0 0 50px 50px'
            }}
          />

          {/* Paw GIF */}
          <div 
            className="absolute"
            style={{
              width: '140px',
              height: '140px',
              bottom: '40px',
              left: '40px',
              zIndex: 10
            }}
          >
            <img 
              src="/paw.gif" 
              alt="Cat paw" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Best of Luck Speech Bubble */}
          <div 
            className="absolute flex items-center justify-center"
            style={{
              width: '150px',
              height: '50px',
              bottom: '180px',
              left: '60px',
              backgroundColor: '#FFFFFF',
              border: '2px solid #3CABDA',
              borderRadius: '16px',
              zIndex: 11,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <p 
              style={{
                fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
                fontSize: '16px',
                fontWeight: 600,
                color: '#15313D'
              }}
            >
              Best of Luck !
            </p>
            <div 
              style={{
                position: 'absolute',
                bottom: '-12px',
                left: '40px',
                width: '20px',
                height: '20px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #3CABDA',
                borderTop: 'none',
                borderLeft: 'none',
                transform: 'rotate(45deg)'
              }}
            />
          </div>
        </div>
      )}

      {/* Result Content - NO CARD */}
      {currentPage === 'result' && !isShrinkingIn && (
        <div className="text-center w-full">
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

          <div 
            className="mb-12 flex items-baseline justify-center animate-zoomIn animate-delay-300"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontWeight: 400,
              color: '#2B7A9B'
            }}
          >
            <span 
              className={`transition-all duration-300 ${isAnimatingScore ? 'blur-sm' : ''}`}
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

          <button
            onClick={handleRestart}
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
      )}
    </div>
  );
}