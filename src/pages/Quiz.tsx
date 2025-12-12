import { useState } from 'react';
import { questions } from '../data/questions';
import AnswerOption from '../components/AnswerOption';
import NavButtons from '../components/NavButtons';
import ProgressBar from '../components/ProgressBar';

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

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
    const updated = [...selectedAnswers];
    updated[currentQuestionIndex] = index;
    setSelectedAnswers(updated);
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, #B6CFEE 0%, #71C6E2 33%, #D9F4FA 66%, #B6CFEE 100%)',
      }}
    >
      <div
        className="w-full max-w-6xl p-10"
        style={{
          background: '#FFFFFFCC',
          borderRadius: '40px',
          border: '1px solid rgba(255,255,255,0.5)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
        }}
      >
        <h1
          className="text-center mb-6"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: '3.5rem',
            background: 'linear-gradient(90deg, #2B7A9B, #3CABDA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Test Your Knowledge
        </h1>

        <div className="max-w-lg mx-auto mb-6">
          <ProgressBar progress={progress} />
        </div>

        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: 'linear-gradient(90deg, #C6E9F7, #E5F8FF)',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #96E5FF',
          }}
          className="mb-6 text-center"
        >
          <p className="text-lg font-medium text-primary-dark">
            {currentQuestion.id}. {currentQuestion.question}
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {currentQuestion.options.map((option, index) => (
            <AnswerOption
              key={index}
              option={option}
              isSelected={selectedAnswers[currentQuestionIndex] === index}
              onClick={() => handleOptionSelect(index)}
            />
          ))}
        </div>

        <div className="flex justify-end max-w-2xl mx-auto mt-6">
          <NavButtons
            canGoPrev={currentQuestionIndex > 0}
            canGoNext={currentQuestionIndex < questions.length - 1}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
