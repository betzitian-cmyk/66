import { SVGProps } from 'react';

export function Football(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M15.6 11.6L22 7.8V4.2L18.4 4.2L14.6 10.6" />
      <path d="M8.4 12.4L2 16.2V19.8L5.6 19.8L9.4 13.4" />
      <path d="M18 14L14 18" />
      <path d="M10 6L6 10" />
      <path d="M12 12L14 10" />
      <path d="M10 14L12 12" />
      <path d="M16 8L18 6" />
      <path d="M6 18L8 16" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
