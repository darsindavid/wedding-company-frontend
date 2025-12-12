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
        height: '78px',
        border: '1px solid #96E5FF',
        borderRadius: '10px',
        background: isSelected 
          ? 'linear-gradient(90deg, #96E5FF 0%, #C6E9F7 100%)'
          : 'linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)',
        padding: '24px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px',
        fontWeight: 500,
        color: '#15313D',
        textAlign: 'center',
        cursor: 'pointer',
        transform: isSelected ? 'scale(0.98)' : 'scale(1)',
        boxShadow: isSelected ? '0 2px 8px rgba(60, 171, 218, 0.2)' : 'none'
      }}
    >
      {option}
    </button>
  );
}