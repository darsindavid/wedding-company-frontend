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
        height: '60px',
        border: '1px solid #cce7f0',
        borderRadius: '8px',
        backgroundColor: isSelected ? '#d2efff' : '#f4fbff',
        padding: '16px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px',
        color: '#15313D',
        cursor: 'pointer'
      }}
    >
      {option}
    </button>
  );
}
