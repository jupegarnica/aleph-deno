import type { ComponentType } from 'react'
import React from 'react'
export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <main>
      <head>
        {/* TODO this works? */}
        <link rel="shortcut icon" type="image/svg" href="/favicon.svg"/>
        <link rel="stylesheet" href="./style/index.css" />
        <title>Jupegarnica</title>
      </head>
      <Page {...pageProps} />
    </main>
  )
}
// TODO IT WORKS?