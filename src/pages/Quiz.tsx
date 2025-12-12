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
    <div className="p-12">
      <h1 className="text-4xl font-serif italic text-center mb-6">
        Test Your Knowledge
      </h1>

      <div className="max-w-3xl mx-auto mb-6">
        <ProgressBar progress={progress} />
      </div>

      <div className="max-w-3xl mx-auto mb-6 text-center font-medium">
        {currentQuestion.id}. {currentQuestion.question}
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-4 mb-6">
        {currentQuestion.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            isSelected={selectedAnswers[currentQuestionIndex] === index}
            onClick={() => handleOptionSelect(index)}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto flex justify-end">
        <NavButtons
          onPrev={handlePrev}
          onNext={handleNext}
          canGoPrev={currentQuestionIndex > 0}
          canGoNext={currentQuestionIndex < questions.length - 1}
        />
      </div>
    </div>
  );
}