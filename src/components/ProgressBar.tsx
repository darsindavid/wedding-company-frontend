interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      style={{
        height: '4px',
        backgroundColor: '#E5F8FF',
        borderRadius: '2px',
        width: '100%',
        position: 'relative'
      }}
    >
      <div
        style={{
          height: '4px',
          width: `${progress}%`,
          backgroundColor: '#15313D',
          borderRadius: '2px',
          transition: 'width 0.3s ease-out'
        }}
      />
    </div>
  );
}
