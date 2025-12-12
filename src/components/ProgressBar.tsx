interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div 
      className="relative w-full"
      style={{
        height: '4px',
        backgroundColor: '#E5F8FF',
        borderRadius: '2px',
        overflow: 'hidden'
      }}
    >
      <div 
        className="absolute top-0 left-0 h-full transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
          borderRadius: '2px'
        }}
      />
    </div>
  );
}