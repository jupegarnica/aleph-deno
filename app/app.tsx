import type { ComponentType } from 'react'
import React from 'react'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <main>
      <head>
        <link rel="shortcut icon" type="image/svg" href="/favicon.svg"/>

        <title>Jupegarnica</title>
      </head>
      <Page {...pageProps} />
    </main>
  )
}
