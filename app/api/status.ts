import type { APIRequest } from "aleph/types.ts"

export default function handler(req: APIRequest) {
  req.status(200).send('ok')
}