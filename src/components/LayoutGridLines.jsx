export default function LayoutGridLines() {
  return (
    <div 
      className="absolute inset-y-0 left-0 right-0 w-full pointer-events-none"
      style={{
        zIndex: 1,
        backgroundImage: `
          linear-gradient(to right, var(--color-border-strong) 1px, transparent 1px),
          linear-gradient(to bottom, var(--color-border-strong) 1px, transparent 1px)
        `,
        backgroundSize: '36px 36px',
        opacity: 0.45
      }}
    />
  );
}
