interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      style={{
        height: '6px',
        width: '100%',
        backgroundColor: '#e8f6ff',
        borderRadius: '3px',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#3CABDA',
          transition: 'width 0.3s ease-out'
        }}
      />
    </div>
  );
}
