import React, {useRef} from 'react';

export default function Home() {
  const ref= useRef();
  return (
    <div className='page' ref={ref}>
      hola
    </div>
  );
}
