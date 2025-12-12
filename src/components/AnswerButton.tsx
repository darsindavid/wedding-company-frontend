interface Props {
  text: string;
  selected: string | null;
  onClick: () => void;
}

export default function AnswerButton({ text, selected, onClick }: Props) {
  const isSelected = selected === text;

  return (
    <button
      onClick={onClick}
      className={`
        w-full py-5 rounded-xl text-center border
        bg-gradient-to-b from-softBlue to-softBlue2 shadow-md hover:shadow-lg
        hover:scale-[1.02] transition
        ${isSelected ? "border-blue-500 shadow-md" : "border-transparent"}
      `}
    >
      {text}
    </button>
  );
}