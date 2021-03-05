import type { ComponentType } from 'react'
import React from 'react'
// import './style/index.css';
// import { useDeno } from 'aleph/mod.ts';

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  // const {deno,v8,typescript} = useDeno(() => {

  //   return Deno.version;
  // },false);
  // const appVersion = useDeno(() => {
  //   const decoder = new TextDecoder('utf-8');
  //   const data = Deno.readFileSync(
  //     '../metadata/latestBuildSucceed',
  //   );
  //   return decoder.decode(data);
  // },false);
  return (
    <main>
      <head>
        {/* <meta name="deno version" content={deno}/>
        <meta name="v8 version" content={v8}/>
        <meta name="typescript version" content={typescript}/>
        <meta name="app version" content={appVersion}/> */}

        <link rel="shortcut icon" type="image/svg" href="favicon.svg"/>
        <link rel="stylesheet" href="style/index.css" />
        <title>GARN</title>
      </head>
      <Page {...pageProps} />
    </main>
  )
}
