interface StarIconProps {
  size?: number;
  className?: string;
  circleColor?: string;
  starColor?: string;
}

export const StarIcon = ({ 
  size = 48, 
  className = "", 
  circleColor = "#FFF7BD", 
  starColor = "#533E2E" 
}: StarIconProps) => {
  return (
    <svg 
      preserveAspectRatio="xMidYMid meet" 
      viewBox="20 20 160 160" 
      height={size} 
      width={size} 
      xmlns="http://www.w3.org/2000/svg" 
      role="presentation" 
      aria-hidden="true"
      className={className}
    >
      <g>
        <path 
          d="M100 180c-44.187 0-80-35.813-80-80s35.813-80 80-80 80 35.813 80 80-35.813 80-80 80z" 
          fill={circleColor}
        />
        <path 
          d="m104.971 58.126 2.624 9.957c1.461 5.528 3.998 10.342 7.461 14.253 3.463 3.912 7.791 6.854 12.833 8.665l10.209 3.65c4.744 1.711 4.744 8.988 0 10.698l-10.209 3.65c-5.043 1.811-9.37 4.753-12.833 8.665s-6 8.726-7.461 14.253l-2.624 9.957c-1.431 5.461-8.568 5.461-9.998 0l-2.599-9.924c-1.461-5.528-3.998-10.375-7.461-14.287-3.463-3.912-7.791-6.854-12.803-8.665l-10.209-3.65c-4.744-1.711-4.744-8.988 0-10.698L72.11 91c5.043-1.811 9.37-4.753 12.803-8.665 3.463-3.912 6-8.726 7.461-14.253l2.624-9.957c1.405-5.46 8.537-5.46 9.973.001z" 
          fill={starColor}
        />
      </g>
    </svg>
  );
};