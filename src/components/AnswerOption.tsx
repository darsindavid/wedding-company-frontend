interface AnswerOptionProps {
  option: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function AnswerOption({ option, isSelected, onClick }: AnswerOptionProps) {
  return (
    <button
      onClick={onClick}
      className="w-full transition-all duration-200"
      style={{
        height: '70px',
        borderRadius: '10px',
        border: '1px solid #96E5FF',
        background: isSelected ? '#C6E9F7' : '#E5F8FF',
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px',
        fontWeight: 500,
        color: '#15313D',
        cursor: 'pointer'
      }}
    >
      {option}
    </button>
  );
}
