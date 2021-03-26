// import sassLoader from 'https://deno.land/x/aleph@v0.3.0-alpha.15/plugins/sass.ts'

import type { Config } from 'https://deno.land/x/aleph@v0.3.0-alpha.15/types.ts'

export default (): Config => ({
  // plugins: [sassLoader()]
  // baseUrl: 'aleph-deno',
  // ssr:false
  postcss: undefined,
})