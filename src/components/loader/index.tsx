import React, { RefObject } from 'react';

interface LoaderProps {
  loaderRef: RefObject<HTMLDivElement>;
  countRef: RefObject<HTMLUListElement>;
  countRef2: RefObject<HTMLUListElement>;
}

export default function Loader({ loaderRef, countRef, countRef2 }: LoaderProps) {
  return (
    <div className="loader-container" ref={loaderRef}>
      <div className="counter-container">
        <ul className="counter-list" ref={countRef}>
          <li><h3>0</h3></li>
          <li><h3>3</h3></li>
          <li><h3>7</h3></li>
          <li><h3>9</h3></li>
        </ul>
      </div>

      <div className="counter-container">
        <ul className="counter-list" ref={countRef2}>
          <li><h3>8</h3></li>
          <li><h3>0</h3></li>
          <li><h3>8</h3></li>
          <li><h3>9</h3></li>
        </ul>
      </div>
    </div>
  );
}
