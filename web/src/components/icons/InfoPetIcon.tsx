import * as React from 'react';

const InfoPetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Info Pet Icon</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 18.667A3.333 3.333 0 1020 12a3.333 3.333 0 000 6.667zM14 24a3.333 3.333 0 100-6.667A3.333 3.333 0 0014 24zm17.333-8.668a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0zM34 24.001a3.333 3.333 0 100-6.667A3.333 3.333 0 0034 24zm-4.075 2.406c.386.456.779.918 1.195 1.406l.315.314c1.678 1.666 3.554 3.528 3.165 6.086-.387 1.347-1.36 2.707-3.107 3.094-.448.086-1.347-.032-2.51-.184-1.365-.178-3.091-.403-4.876-.403h-.24c-1.77 0-3.483.225-4.842.404-1.18.155-2.093.276-2.545.183-1.747-.387-2.72-1.734-3.107-3.094-.376-2.544 1.499-4.405 3.176-6.07l.318-.316a381.63 381.63 0 002.111-2.474c.386-.456.779-.918 1.195-1.406.627-.72 1.4-1.44 2.334-1.76.146-.054.293-.094.44-.12C23.293 22 23.653 22 24 22s.707 0 1.04.053c.147.027.293.067.44.12.933.32 1.72 1.04 2.333 1.76.753.872 1.422 1.662 2.112 2.474z"
      fill="#222"
    />
  </svg>
);

export default InfoPetIcon;
