import React from 'react';
import ContentLoader from 'react-content-loader';

const SneakersLoading = () => (
  <div className="border rounded-3xl px-5 py-5">
    <ContentLoader
      speed={2.5}
      width={225}
      height={278}
      viewBox="0 0 225 278"
      backgroundColor="#e0e0e0"
      foregroundColor="#cfcfcf">
      <rect x="0" y="10" rx="30" ry="30" width="190" height="128" />
      <rect x="0" y="167" rx="4" ry="4" width="190" height="15" />
      <rect x="14" y="189" rx="4" ry="4" width="160" height="15" />
      <rect x="0" y="225" rx="10" ry="10" width="80" height="50" />
      <rect x="150" y="234" rx="10" ry="10" width="40" height="40" />
    </ContentLoader>
  </div>
);

export default SneakersLoading;
