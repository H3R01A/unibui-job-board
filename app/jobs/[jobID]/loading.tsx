'use client';

import { ThreeCircles } from 'react-loader-spinner';

export default function jobIDLoading() {
  return (
    <>
      <h1>Loading details on your next class</h1>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#ffffff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
}
