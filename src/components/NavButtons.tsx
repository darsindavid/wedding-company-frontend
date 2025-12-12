interface NavButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export default function NavButtons({ onPrev, onNext, canGoPrev, canGoNext }: NavButtonsProps) {
  return (
    <div 
      className="flex"
      style={{
        width: '116px',
        height: '50px',
        gap: '10px'
      }}
    >
      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className="transition-all duration-200"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #E5E7EB',
          cursor: canGoPrev ? 'pointer' : 'not-allowed',
          opacity: canGoPrev ? 1 : 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#15313D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="transition-all duration-200"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '8px',
          backgroundColor: canGoNext ? '#3CABDA' : '#FFFFFF',
          border: '1px solid #E5E7EB',
          cursor: canGoNext ? 'pointer' : 'not-allowed',
          opacity: canGoNext ? 1 : 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: canGoNext ? '0 2px 8px rgba(60, 171, 218, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={canGoNext ? '#FFFFFF' : '#15313D'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}