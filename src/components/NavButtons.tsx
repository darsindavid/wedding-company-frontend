interface NavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export default function NavButtons({ onPrev, onNext, canGoPrev, canGoNext }: NavButtonsProps) {
  return (
    <div className="flex gap-3 mt-6">
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '8px',
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          cursor: canGoPrev ? 'pointer' : 'not-allowed',
          opacity: canGoPrev ? 1 : 0.4
        }}
      >
        ←
      </button>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '8px',
          backgroundColor: canGoNext ? '#3CABDA' : '#ffffff',
          color: canGoNext ? '#ffffff' : '#000000',
          border: '1px solid #e2e8f0',
          cursor: canGoNext ? 'pointer' : 'not-allowed',
          opacity: canGoNext ? 1 : 0.4
        }}
      >
        →
      </button>
    </div>
  );
}
