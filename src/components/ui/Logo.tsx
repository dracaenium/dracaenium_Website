interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="120 100 280 340" 
        role="img" 
        aria-label="Dracaenium logo"
        width={size}
        height={size}
      >
        <defs>
          <linearGradient id="leaf-gradient" x1="0.15" y1="0.2" x2="0.9" y2="0.85">
            <stop offset="0" stopColor="#2ECC71"/>
            <stop offset="1" stopColor="#12B3C7"/>
          </linearGradient>
        </defs>
        <path 
          d="M170 402C138 350 140 280 170 228C205 168 270 130 340 126C388 124 404 146 404 192C404 270 360 360 294 410C240 450 196 442 170 402 Z" 
          fill="url(#leaf-gradient)"
        />
        <path 
          d="M200 406C182 332 196 262 236 212C272 166 320 146 372 142" 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="16" 
          strokeLinecap="round" 
          opacity="0.92"
        />
      </svg>
    </div>
  );
}
