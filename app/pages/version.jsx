import React from 'react';

import { useDeno } from 'aleph/mod.ts';
// import './version.css';
export default function Version() {
  const { deno, v8, typescript } = useDeno(() => {
    return Deno.version;
  });
  const lastBuildSucceed = useDeno(() => {
    const decoder = new TextDecoder('utf-8');
    const data = Deno.readFileSync(
      '../metadata/latestBuildSucceed',
    );
    return decoder.decode(data);
  });

  return (
    <div className='page Version'>
      <div className='versions deno'>
        deno <span className='version'>{deno}</span>
      </div>
      <div className='versions v8'>
        v8 <span className='version'>{v8}</span>
      </div>
      <div className='versions typescript'>
        typescript <span className='version'>{typescript}</span>
      </div>
      <div className='versions app'>
        app <span className='version'>{lastBuildSucceed}</span>
      </div>
    </div>
  );
}
