interface NavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export default function NavButtons({ onPrev, onNext, canGoPrev, canGoNext }: NavButtonsProps) {
  return (
    <div className="flex gap-4">
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        style={{
          width: '45px',
          height: '45px',
          borderRadius: '8px',
          border: '1px solid #E5E7EB',
          background: '#FFFFFF',
          cursor: canGoPrev ? 'pointer' : 'not-allowed'
        }}
      >
        ←
      </button>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        style={{
          width: '45px',
          height: '45px',
          borderRadius: '8px',
          border: '1px solid #E5E7EB',
          background: canGoNext ? '#3CABDA' : '#FFFFFF',
          color: canGoNext ? '#FFFFFF' : '#15313D',
          cursor: canGoNext ? 'pointer' : 'not-allowed'
        }}
      >
        →
      </button>
    </div>
  );
}
