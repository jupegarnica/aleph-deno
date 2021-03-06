import React from 'react';

// import { useDeno } from 'aleph/mod.ts';
import './footer.css';


export default function Footer() {
  // const { app, v8, deno, typescript } = useDeno(async () => {
  //   return await fetch('/aleph-deno/api/version').then(console.log);
  // },true,[]);
  return (
    <footer className='footer'>
      hola
      {/* <div className='deno'>
        deno <span className='version'>{deno}</span>
      </div>
      <div className='v8'>
        v8 <span className='version'>{v8}</span>
      </div>
      <div className='typescript'>
        typescript <span className='version'>{typescript}</span>
      </div>
      <div className='app'>
        app <span className='version'>{app}</span>
      </div> */}
    </footer>
  );
}
