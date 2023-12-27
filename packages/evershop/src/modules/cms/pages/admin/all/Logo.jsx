import PropTypes from 'prop-types';
import React from 'react';
import './Logo.scss';

export default function Logo({ dashboardUrl }) {
  return (
    <div className="logo">
      <a href={dashboardUrl} className="flex items-end">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.88 60.14">
          <g>
            <polygon fill="#084783" strokeWidth="0" points="21 0 21.22 0 40.3 40.01 39.24 40.01 21.11 2.12 3.03 40.01 1.97 40.01 21 0" />
            <polygon fill="#084783" strokeWidth="0" points="43.59 .95 44.65 .95 76.63 38.61 76.63 .95 77.63 .95 77.63 40.01 76.57 40.01 44.6 2.34 44.6 40.01 43.59 40.01 43.59 .95" />
            <polygon fill="#084783" strokeWidth="0" points="82.21 .95 97.11 22.6 112 .95 113.12 .95 97.61 23.55 97.61 40.01 96.6 40.01 96.6 23.55 81.03 .95 82.21 .95" />
            <path fill="#084783" strokeWidth="0" d="m116.47.95h14.84c8.15,0,12.22,6.08,12.22,12.11s-4.07,12.11-12.22,12.11h-12.11v14.84h-2.73V.95Zm2.73,21.59h12.11c6.19,0,9.26-4.74,9.26-9.49s-3.07-9.43-9.26-9.43h-12.11v18.92Z" />
            <path fill="#084783" strokeWidth="0" d="m147.49.95h15.18c8.15,0,12.22,5.58,12.22,11.22,0,4.91-3.29,9.88-9.6,10.99l14.28,16.85h-3.68l-13.95-16.63h-11.72v16.63h-2.73V.95Zm2.73,19.75h12.44c6.19,0,9.26-4.3,9.26-8.54s-3.07-8.54-9.26-8.54h-12.44v17.07Z" />
            <rect fill="#084783" strokeWidth="0" x="182.87" y=".95" width="2.73" height="39.06" />
            <polygon fill="#084783" strokeWidth="0" points="191.18 .95 193.47 .95 222.71 35.43 222.71 .95 225.44 .95 225.44 40.01 223.1 40.01 193.92 5.52 193.92 40.01 191.18 40.01 191.18 .95" />
            <polygon fill="#084783" strokeWidth="0" points="261.88 .95 261.88 3.46 246.7 3.46 246.7 40.01 243.97 40.01 243.97 3.46 228.79 3.46 228.79 .95 261.88 .95" />
            <polygon fill="#f3e600" strokeWidth="0" points="14.26 40.01 27.1 40.01 20.93 26.65 14.26 40.01" />
          </g>
        </svg>
        {/* <span className="font-bold">ANYPRINT</span> */}
      </a>
    </div>
  );
}

Logo.propTypes = {
  dashboardUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'header',
  sortOrder: 10
};

export const query = `
  query Query {
    dashboardUrl: url(routeId:"dashboard")
  }
`;
