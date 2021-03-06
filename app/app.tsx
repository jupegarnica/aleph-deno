import type { ComponentType } from 'react';
import React from 'react';
import './style/main.css';
// import { useDeno } from 'aleph/mod.ts';

export default function App({
  Page,
  pageProps,
}: {
  Page: ComponentType<any>;
  pageProps: any;
}):any {
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
        {/* <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;800&display=swap'
          rel='stylesheet'
        /> */}
        <link
          rel='shortcut icon'
          type='image/svg'
          href='favicon.svg'
        />
        {/* <link rel="stylesheet" href="style/index.css" /> */}
        <title>GARN</title>
      </head>
      <Page {...pageProps} />
    </main>
  );
}
