import { useDeno } from 'aleph';
import React from 'react';

export default function Home() {
  const version = useDeno(() => Deno.version.deno);

  return (
    <div className='page'>
      <p className='copyinfo'>
        Built by Aleph.js in Deno {version}
      </p>
    </div>
  );
}
